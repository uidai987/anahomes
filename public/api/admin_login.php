<?php
/**
 * Admin Login API
 */

require_once 'config.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(['success' => false, 'message' => 'Invalid request method']);
}

$conn = getConnection();

$email = isset($_POST['email']) ? sanitize($conn, $_POST['email']) : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

if (empty($email) || empty($password)) {
    sendResponse(['success' => false, 'message' => 'Email and password are required']);
}

$sql = "SELECT id, name, email, password, role FROM admins WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $admin = $result->fetch_assoc();
    
    if (password_verify($password, $admin['password'])) {
        // Generate token
        $token = bin2hex(random_bytes(32));
        
        // Store session
        $_SESSION['admin_id'] = $admin['id'];
        $_SESSION['admin_token'] = $token;
        
        sendResponse([
            'success' => true,
            'message' => 'Login successful',
            'token' => $token,
            'name' => $admin['name'],
            'role' => $admin['role']
        ]);
    }
}

sendResponse(['success' => false, 'message' => 'Invalid email or password']);

$stmt->close();
$conn->close();
?>
