<?php
/**
 * Submit Enquiry API
 * Handles form submissions from the website
 */

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(['success' => false, 'message' => 'Invalid request method']);
}

$conn = getConnection();

// Get form data
$name = isset($_POST['name']) ? sanitize($conn, $_POST['name']) : '';
$email = isset($_POST['email']) ? sanitize($conn, $_POST['email']) : '';
$phone = isset($_POST['phone']) ? sanitize($conn, $_POST['phone']) : '';
$service = isset($_POST['service']) ? sanitize($conn, $_POST['service']) : '';
$message = isset($_POST['message']) ? sanitize($conn, $_POST['message']) : '';

// Validation
if (empty($name) || empty($email)) {
    sendResponse(['success' => false, 'message' => 'Name and email are required']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendResponse(['success' => false, 'message' => 'Invalid email format']);
}

// Insert into database
$sql = "INSERT INTO inquiries (name, email, phone, service, message, source) VALUES (?, ?, ?, ?, ?, 'enquiry_form')";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $name, $email, $phone, $service, $message);

if ($stmt->execute()) {
    // Optional: Send email notification to admin
    // mail('admin@buildcraft.com', 'New Enquiry', "New enquiry from $name ($email)");
    
    sendResponse([
        'success' => true, 
        'message' => 'Your enquiry has been submitted successfully!',
        'id' => $stmt->insert_id
    ]);
} else {
    sendResponse(['success' => false, 'message' => 'Failed to submit enquiry. Please try again.']);
}

$stmt->close();
$conn->close();
?>
