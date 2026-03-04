<?php
// Allow requests from your frontend domain
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    http_response_code(405);
    exit();
}

// Get the form data
$data = json_decode(file_get_contents('php://input'), true);

$name    = htmlspecialchars($data['name'] ?? '');
$email   = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars($data['subject'] ?? '');
$message = htmlspecialchars($data['message'] ?? '');

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    http_response_code(400);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    http_response_code(400);
    exit();
}

// ========== CHANGE THIS TO YOUR EMAIL ==========
$to = "info@alzaitoonbeauty.com";
// ================================================

$email_subject = "New Contact Form: $subject";

$email_body = "
<html>
<body style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
    <h2 style='color: #4a5a3a; border-bottom: 2px solid #c9a84c; padding-bottom: 10px;'>
        New Contact Form Submission
    </h2>
    <table style='width: 100%; border-collapse: collapse;'>
        <tr>
            <td style='padding: 8px 12px; font-weight: bold; color: #555;'>Name:</td>
            <td style='padding: 8px 12px;'>$name</td>
        </tr>
        <tr style='background: #f9f9f9;'>
            <td style='padding: 8px 12px; font-weight: bold; color: #555;'>Email:</td>
            <td style='padding: 8px 12px;'><a href='mailto:$email'>$email</a></td>
        </tr>
        <tr>
            <td style='padding: 8px 12px; font-weight: bold; color: #555;'>Subject:</td>
            <td style='padding: 8px 12px;'>$subject</td>
        </tr>
    </table>
    <div style='margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;'>
        <h3 style='margin-top: 0; color: #555;'>Message:</h3>
        <p style='white-space: pre-wrap; line-height: 1.6;'>$message</p>
    </div>
    <p style='margin-top: 20px; font-size: 12px; color: #999;'>
        This message was sent from the Al Zaitoon website contact form.
    </p>
</body>
</html>
";

// Email headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Al Zaitoon Website <noreply@" . $_SERVER['SERVER_NAME'] . ">\r\n";
$headers .= "Reply-To: $email\r\n";

// Send the email using PHP mail()
if (mail($to, $email_subject, $email_body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again.']);
    http_response_code(500);
}
?>
