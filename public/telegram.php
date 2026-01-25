<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "No data"]);
    exit;
}

$token = "8506356791:AAGpd6AjISuiBNozm0dqlw8i6aj_zS07hk0";
$chat_id = "7216494259";

$message = "";

if (isset($data['planName'])) {
    // Checkout
    $message = "<b>🚀 New Order Placed!</b>\n" .
               "━━━━━━━━━━━━━━━━━━\n" .
               "<b>👤 Customer:</b> " . ($data['firstName'] ?? '') . " " . ($data['lastName'] ?? '') . "\n" .
               "<b>📧 Email:</b> " . ($data['email'] ?? '') . "\n" .
               "<b>📱 WhatsApp:</b> " . ($data['whatsapp'] ?? 'Not provided') . "\n" .
               "<b>📦 Plan:</b> " . ($data['planName'] ?? '') . " (" . ($data['planPeriod'] ?? '') . ")\n" .
               "<b>💰 Price:</b> " . ($data['planPrice'] ?? '') . "\n" .
               "<b>💳 Method:</b> " . ($data['paymentMethod'] ?? '') . "\n" .
               "<b>📅 Date:</b> " . date("Y-m-d H:i:s") . "\n" .
               "━━━━━━━━━━━━━━━━━━";
} else {
    // Contact
    $message = "<b>📩 New Contact Message</b>\n" .
               "━━━━━━━━━━━━━━━━━━\n" .
               "<b>👤 Name:</b> " . ($data['firstName'] ?? '') . " " . ($data['lastName'] ?? '') . "\n" .
               "<b>📧 Email:</b> " . ($data['email'] ?? '') . "\n" .
               "<b>📝 Subject:</b> " . ($data['subject'] ?? 'No Subject') . "\n" .
               "<b>💬 Message:</b>\n" . ($data['message'] ?? '') . "\n" .
               "<b>📅 Date:</b> " . date("Y-m-d H:i:s") . "\n" .
               "━━━━━━━━━━━━━━━━━━";
}

$url = "https://api.telegram.org/bot$token/sendMessage";
$post_data = [
    'chat_id' => $chat_id,
    'text' => $message,
    'parse_mode' => 'HTML'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post_data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo json_encode(["success" => true, "telegram_response" => json_decode($response)]);
?>
