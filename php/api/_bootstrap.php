<?php

declare(strict_types=1);

require_once __DIR__ . '/lib/PHPMailer/Exception.php';
require_once __DIR__ . '/lib/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/lib/PHPMailer/SMTP.php';
require_once __DIR__ . '/_helpers.php';

$configCandidates = [
    getenv('EKN_MAIL_CONFIG') ?: '',
    __DIR__ . '/../../../private/mail-config.php',
    __DIR__ . '/../../private/mail-config.php',
    __DIR__ . '/mail-config.php',
];

$configLoaded = false;
foreach ($configCandidates as $candidate) {
    if ($candidate !== '' && is_file($candidate) && is_readable($candidate)) {
        require_once $candidate;
        $configLoaded = true;
        break;
    }
}

if (!$configLoaded) {
    json_response(['error' => 'Mail service is not configured on the server.'], 500);
}

$requiredConstants = [
    'MAIL_SMTP_HOST', 'MAIL_SMTP_USER', 'MAIL_SMTP_PASS', 'MAIL_SMTP_PORT',
    'MAIL_SMTP_SECURE', 'MAIL_FROM_ADDRESS', 'MAIL_FROM_NAME', 'MAIL_RECIPIENTS',
];
foreach ($requiredConstants as $name) {
    if (!defined($name)) {
        json_response(['error' => "Mail config missing: $name"], 500);
    }
}
