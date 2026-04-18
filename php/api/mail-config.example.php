<?php

// =============================================================================
// Ekusher Naree — Mail Configuration
// =============================================================================
//
// IMPORTANT — DO NOT COMMIT THE REAL FILE TO GIT.
//
// On the cPanel server, copy this file to:
//
//     /home2/ekushpp6/private/mail-config.php
//
// (i.e. one directory ABOVE public_html, in a folder called `private`.
// Web requests cannot reach files outside public_html, so the SMTP password
// stays safe.)
//
// Steps:
//   1. cPanel  Email Accounts  Create a new account, e.g.
//        noreply@ekushernaree.com   with a strong password.
//   2. cPanel  File Manager  inside /home2/ekushpp6/  click +Folder  name it `private`.
//   3. Inside `private/`, create a file called `mail-config.php`
//      and paste the contents of this example with the real values filled in.
//   4. Set the file permissions to 600 (owner read/write only) via File Manager
//      Permissions, or via SSH:
//          chmod 600 /home2/ekushpp6/private/mail-config.php
// =============================================================================

declare(strict_types=1);

// SMTP server settings
// These match what cPanel  Email Accounts  Connect Devices shows for
// info@ekushernaree.com:
//   Outgoing Server: mail.ekushernaree.com
//   SMTP Port:       465
//   Encryption:      SSL  (port 465 == SSL, port 587 would be TLS/STARTTLS)
define('MAIL_SMTP_HOST',   'mail.ekushernaree.com');
define('MAIL_SMTP_PORT',   465);
define('MAIL_SMTP_SECURE', 'ssl');           // 'ssl' for 465,  'tls' for 587

// Credentials of the sending mailbox.
// Username is the full email address. Password is the mailbox password
// (same one used for webmail / IMAP).
define('MAIL_SMTP_USER',   'info@ekushernaree.com');
define('MAIL_SMTP_PASS',   'PASTE_THE_MAILBOX_PASSWORD_HERE');

// What appears in the From: header of the outgoing email.
// Use the SAME mailbox as MAIL_SMTP_USER  many SMTP servers reject otherwise.
define('MAIL_FROM_ADDRESS', 'info@ekushernaree.com');
define('MAIL_FROM_NAME',    'Ekusher Naree Website');

// Where form submissions should land. Multiple recipients allowed.
define('MAIL_RECIPIENTS', [
    'info@ekushernaree.com',
    // 'contact@ekushernaree.com',
]);
