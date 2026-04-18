<?php

declare(strict_types=1);

function json_response(array $data, int $status = 200): void {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('X-Content-Type-Options: nosniff');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function read_json_input(): ?array {
    $raw = file_get_contents('php://input');
    if ($raw === false || $raw === '') return null;
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : null;
}

function client_ip(): string {
    $candidates = [];
    if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) $candidates[] = $_SERVER['HTTP_CF_CONNECTING_IP'];
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        foreach (explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']) as $p) $candidates[] = trim($p);
    }
    if (!empty($_SERVER['REMOTE_ADDR'])) $candidates[] = $_SERVER['REMOTE_ADDR'];
    foreach ($candidates as $ip) {
        if (filter_var($ip, FILTER_VALIDATE_IP)) return $ip;
    }
    return '0.0.0.0';
}

function rate_limit(string $key, int $max = 5, int $windowSeconds = 900): bool {
    $dir = sys_get_temp_dir() . '/ekn_ratelimit';
    if (!is_dir($dir)) @mkdir($dir, 0700, true);
    $safeKey = preg_replace('/[^A-Za-z0-9_\-.]/', '_', $key);
    $file = $dir . '/' . $safeKey;
    $now = time();

    $entries = [];
    if (is_file($file)) {
        $raw = @file_get_contents($file);
        if ($raw) {
            foreach (explode("\n", trim($raw)) as $ts) {
                if (ctype_digit($ts) && ((int)$ts) > $now - $windowSeconds) {
                    $entries[] = (int)$ts;
                }
            }
        }
    }
    if (count($entries) >= $max) return false;
    $entries[] = $now;
    @file_put_contents($file, implode("\n", $entries), LOCK_EX);
    return true;
}

function validate_phone(string $countryCode, string $digits): ?string {
    if ($digits === '') return 'Please enter your phone number';
    if (!ctype_digit($digits)) return 'Phone number must contain only digits';
    if ($countryCode === '+91') {
        if (strlen($digits) !== 10) return 'Indian mobile number must be 10 digits';
        if (!preg_match('/^[6-9]/', $digits)) return 'Indian mobile number must start with 6, 7, 8, or 9';
        return null;
    }
    $len = strlen($digits);
    if ($len < 7 || $len > 15) return 'Phone number must be between 7 and 15 digits';
    return null;
}

function escape(string $s): string {
    return htmlspecialchars($s, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

function build_kv_html(array $rows): string {
    $html = '<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;color:#222">';
    foreach ($rows as $label => $value) {
        $html .= '<tr>'
            . '<td style="padding:8px 12px;border:1px solid #f0d8a8;background:#fff7ec;font-weight:bold;vertical-align:top;width:160px">'
            . escape($label)
            . '</td>'
            . '<td style="padding:8px 12px;border:1px solid #f0d8a8;background:#fff;white-space:pre-wrap">'
            . nl2br(escape((string)$value))
            . '</td>'
            . '</tr>';
    }
    $html .= '</table>';
    return $html;
}

function build_kv_text(array $rows): string {
    $out = '';
    foreach ($rows as $label => $value) {
        $out .= $label . ":\n" . $value . "\n\n";
    }
    return $out;
}

function send_smtp_mail(array $opts): void {
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = MAIL_SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = MAIL_SMTP_USER;
    $mail->Password   = MAIL_SMTP_PASS;
    $mail->SMTPSecure = MAIL_SMTP_SECURE;
    $mail->Port       = MAIL_SMTP_PORT;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom(MAIL_FROM_ADDRESS, MAIL_FROM_NAME);
    foreach ((array)MAIL_RECIPIENTS as $to) {
        $mail->addAddress($to);
    }
    if (!empty($opts['reply_to'])) {
        $mail->addReplyTo($opts['reply_to'], $opts['reply_name'] ?? '');
    }

    $mail->isHTML(true);
    $mail->Subject = $opts['subject'];
    $mail->Body    = $opts['body_html'];
    $mail->AltBody = $opts['body_text'];

    $mail->send();
}
