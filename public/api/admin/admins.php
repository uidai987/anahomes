<?php
/**
 * Admin Users API
 * CRUD operations for admin user management
 */

require_once '../config.php';

$conn = getConnection();
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Get all admins
        $sql = "SELECT id, name, email, role, created_at FROM admins ORDER BY created_at DESC";
        $result = $conn->query($sql);
        $admins = [];
        
        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $row['created'] = date('Y-m-d', strtotime($row['created_at']));
                $admins[] = $row;
            }
        }
        
        sendResponse($admins);
        break;
        
    case 'POST':
        // Create new admin
        $name = isset($_POST['name']) ? sanitize($conn, $_POST['name']) : '';
        $email = isset($_POST['email']) ? sanitize($conn, $_POST['email']) : '';
        $password = isset($_POST['password']) ? $_POST['password'] : '';
        $role = isset($_POST['role']) ? sanitize($conn, $_POST['role']) : 'admin';
        
        if (empty($name) || empty($email) || empty($password)) {
            sendResponse(['success' => false, 'message' => 'Name, email and password are required']);
        }
        
        // Check if email already exists
        $checkSql = "SELECT id FROM admins WHERE email = ?";
        $checkStmt = $conn->prepare($checkSql);
        $checkStmt->bind_param("s", $email);
        $checkStmt->execute();
        $checkResult = $checkStmt->get_result();
        
        if ($checkResult->num_rows > 0) {
            sendResponse(['success' => false, 'message' => 'Email already exists']);
        }
        
        // Hash password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        
        $sql = "INSERT INTO admins (name, email, password, role) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss", $name, $email, $hashedPassword, $role);
        
        if ($stmt->execute()) {
            sendResponse([
                'success' => true, 
                'message' => 'Admin created successfully',
                'id' => $stmt->insert_id
            ]);
        } else {
            sendResponse(['success' => false, 'message' => 'Failed to create admin']);
        }
        break;
        
    case 'PUT':
        // Update admin
        $data = json_decode(file_get_contents('php://input'), true);
        
        $id = isset($data['id']) ? (int)$data['id'] : 0;
        $name = isset($data['name']) ? sanitize($conn, $data['name']) : '';
        $email = isset($data['email']) ? sanitize($conn, $data['email']) : '';
        $password = isset($data['password']) ? $data['password'] : '';
        $role = isset($data['role']) ? sanitize($conn, $data['role']) : 'admin';
        
        if (!$id) {
            sendResponse(['success' => false, 'message' => 'Invalid ID']);
        }
        
        // Check if email already exists for another user
        $checkSql = "SELECT id FROM admins WHERE email = ? AND id != ?";
        $checkStmt = $conn->prepare($checkSql);
        $checkStmt->bind_param("si", $email, $id);
        $checkStmt->execute();
        $checkResult = $checkStmt->get_result();
        
        if ($checkResult->num_rows > 0) {
            sendResponse(['success' => false, 'message' => 'Email already exists']);
        }
        
        if (!empty($password)) {
            // Update with new password
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $sql = "UPDATE admins SET name = ?, email = ?, password = ?, role = ? WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ssssi", $name, $email, $hashedPassword, $role, $id);
        } else {
            // Update without changing password
            $sql = "UPDATE admins SET name = ?, email = ?, role = ? WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssi", $name, $email, $role, $id);
        }
        
        if ($stmt->execute()) {
            sendResponse(['success' => true, 'message' => 'Admin updated successfully']);
        } else {
            sendResponse(['success' => false, 'message' => 'Failed to update admin']);
        }
        break;
        
    case 'DELETE':
        // Delete admin
        $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
        
        if (!$id) {
            sendResponse(['success' => false, 'message' => 'Invalid ID']);
        }
        
        // Prevent deleting the super admin with id 1
        if ($id === 1) {
            sendResponse(['success' => false, 'message' => 'Cannot delete the primary super admin']);
        }
        
        $sql = "DELETE FROM admins WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        
        if ($stmt->execute()) {
            sendResponse(['success' => true, 'message' => 'Admin deleted successfully']);
        } else {
            sendResponse(['success' => false, 'message' => 'Failed to delete admin']);
        }
        break;
        
    default:
        sendResponse(['success' => false, 'message' => 'Invalid request method']);
}

$conn->close();
?>
