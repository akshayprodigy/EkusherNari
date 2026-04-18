<?php

declare(strict_types=1);

require_once __DIR__ . '/_bootstrap.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    json_response(['error' => 'Method not allowed.'], 405);
}

$ip = client_ip();
if (!rate_limit("contact_$ip", 5, 900)) {
    json_response(['error' => 'Too many requests. Please try again in a few minutes.'], 429);
}

$input = read_json_input();
if ($input === null) {
    json_response(['error' => 'Invalid request body.'], 400);
}

if (!empty($input['website']) || !empty($input['_hp'])) {
    json_response(['ok' => true]);
}

$errors = [];
$name         = trim((string)($input['name']         ?? ''));
$email        = trim((string)($input['email']        ?? ''));
$countryCode  = trim((string)($input['countryCode']  ?? '+91'));
$phoneRaw     = (string)($input['phone'] ?? '');
$phone        = preg_replace('/\D/', '', $phoneRaw) ?? '';
$pincode      = trim((string)($input['pincode']      ?? ''));
$subject      = trim((string)($input['subject']      ?? ''));
$message      = trim((string)($input['message']      ?? ''));
$whatsapp     = !empty($input['whatsappOptIn']);

if ($name === '' || mb_strlen($name) < 2) {
    $errors['name'] = 'Please enter your full name (min 2 characters).';
} elseif (!preg_match("/^[A-Za-z][A-Za-z\s.'-]{1,}$/u", $name)) {
    $errors['name'] = 'Name can only contain letters, spaces, . \' -';
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address.';
}

if ($phone !== '') {
    $phoneError = validate_phone($countryCode, $phone);
    if ($phoneError !== null) $errors['phone'] = $phoneError;
}

if ($pincode !== '' && !preg_match('/^[1-9]\d{5}$/', $pincode)) {
    $errors['pincode'] = 'PIN code must be 6 digits and cannot start with 0.';
}

if ($subject === '' || mb_strlen($subject) < 3) {
    $errors['subject'] = 'Please enter a subject (min 3 characters).';
}

if ($message === '' || mb_strlen($message) < 10) {
    $errors['message'] = 'Please enter a message (min 10 characters).';
}

if ($errors) {
    json_response(['errors' => $errors], 422);
}

$fullPhone = $phone !== '' ? "$countryCode $phone" : '—';

$rows = [
    'Name'                 => $name,
    'Email'                => $email,
    'Phone'                => $fullPhone,
    'WhatsApp opt-in'      => $whatsapp ? 'Yes' : 'No',
    'PIN code'             => $pincode !== '' ? $pincode : '—',
    'Subject'              => $subject,
    'Message'              => $message,
    'Submitted from (IP)'  => $ip,
    'Submitted at (UTC)'   => gmdate('Y-m-d H:i:s'),
];

$bodyHtml = '<h2 style="font-family:Arial,sans-serif;color:#c2410c;margin:0 0 16px">New contact form submission</h2>'
    . build_kv_html($rows);
$bodyText = "New contact form submission\n\n" . build_kv_text($rows);

try {
    send_smtp_mail([
        'subject'    => '[Ekusher Naree] Contact: ' . mb_substr($subject, 0, 80),
        'body_html'  => $bodyHtml,
        'body_text'  => $bodyText,
        'reply_to'   => $email,
        'reply_name' => $name,
    ]);
    json_response(['ok' => true]);
} catch (\Throwable $e) {
    error_log('contact.php send failed: ' . $e->getMessage());
    json_response(['error' => 'Could not send your message right now. Please try again later.'], 502);
}
