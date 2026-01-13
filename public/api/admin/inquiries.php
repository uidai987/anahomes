<?php
/**
 * Admin Inquiries API
 * CRUD operations for inquiries management
 */

require_once '../config.php';

$conn = getConnection();
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Get all inquiries with optional filters
        $status = isset($_GET['status']) ? sanitize($conn, $_GET['status']) : null;
        $service = isset($_GET['service']) ? sanitize($conn, $_GET['service']) : null;
        
        $sql = "SELECT * FROM inquiries WHERE 1=1";
        
        if ($status && $status !== 'all') {
            $sql .= " AND status = '$status'";
        }
        if ($service) {
            $sql .= " AND service = '$service'";
        }
        
        $sql .= " ORDER BY created_at DESC";
        
        $result = $conn->query($sql);
        $inquiries = [];
        
        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $row['date'] = date('Y-m-d', strtotime($row['created_at']));
                $inquiries[] = $row;
            }
        }
        
        sendResponse($inquiries);
        break;
        
    case 'PUT':
        // Update inquiry status
        $data = json_decode(file_get_contents('php://input'), true);
        
        $id = isset($data['id']) ? (int)$data['id'] : 0;
        $status = isset($data['status']) ? sanitize($conn, $data['status']) : '';
        
        if (!$id || !$status) {
            sendResponse(['success' => false, 'message' => 'Invalid data']);
        }
        
        $sql = "UPDATE inquiries SET status = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("si", $status, $id);
        
        if ($stmt->execute()) {
            sendResponse(['success' => true, 'message' => 'Inquiry updated successfully']);
        } else {
            sendResponse(['success' => false, 'message' => 'Failed to update inquiry']);
        }
        break;
        
    case 'DELETE':
        // Delete inquiry
        $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
        
        if (!$id) {
            sendResponse(['success' => false, 'message' => 'Invalid ID']);
        }
        
        $sql = "DELETE FROM inquiries WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        
        if ($stmt->execute()) {
            sendResponse(['success' => true, 'message' => 'Inquiry deleted successfully']);
        } else {
            sendResponse(['success' => false, 'message' => 'Failed to delete inquiry']);
        }
        break;
        
    default:
        sendResponse(['success' => false, 'message' => 'Invalid request method']);
}

$conn->close();
?>
