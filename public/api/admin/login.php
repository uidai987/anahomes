<?php
/**
 * Admin Login API
 */

require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(['success' => false, 'message' => 'Invalid request method']);
}

$conn = getConnection();

$email = isset($_POST['email']) ? sanitize($conn, $_POST['email']) : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

if (empty($email) || empty($password)) {
    sendResponse(['success' => false, 'message' => 'Email and password are required']);
}

// Get admin by email
$sql = "SELECT id, name, email, password, role FROM admins WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    sendResponse(['success' => false, 'message' => 'Invalid email or password']);
}

$admin = $result->fetch_assoc();

// Verify password
if (!password_verify($password, $admin['password'])) {
    sendResponse(['success' => false, 'message' => 'Invalid email or password']);
}

// Generate simple token (in production, use JWT or secure sessions)
$token = bin2hex(random_bytes(32));

sendResponse([
    'success' => true,
    'message' => 'Login successful',
    'data' => [
        'id' => $admin['id'],
        'name' => $admin['name'],
        'email' => $admin['email'],
        'role' => $admin['role'],
        'token' => $token
    ]
]);

$stmt->close();
$conn->close();
?>
