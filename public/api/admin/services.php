<?php
/**
 * Admin Services API
 * CRUD operations for services management
 */

require_once '../config.php';

$conn = getConnection();
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Get all services
        $sql = "SELECT * FROM services ORDER BY sort_order ASC";
        $result = $conn->query($sql);
        $services = [];
        
        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $row['active'] = (bool)$row['is_active'];
                $services[] = $row;
            }
        }
        
        sendResponse($services);
        break;
        
    case 'POST':
        // Create new service
        $title = isset($_POST['title']) ? sanitize($conn, $_POST['title']) : '';
        $description = isset($_POST['description']) ? sanitize($conn, $_POST['description']) : '';
        $icon = isset($_POST['icon']) ? sanitize($conn, $_POST['icon']) : 'tools';
        $image = isset($_POST['image']) ? sanitize($conn, $_POST['image']) : '';
        $active = isset($_POST['active']) ? 1 : 0;
        
        if (empty($title)) {
            sendResponse(['success' => false, 'message' => 'Title is required']);
        }
        
        $sql = "INSERT INTO services (title, description, icon, image, is_active) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssi", $title, $description, $icon, $image, $active);
        
        if ($stmt->execute()) {
            sendResponse([
                'success' => true, 
                'message' => 'Service created successfully',
                'id' => $stmt->insert_id
            ]);
        } else {
            sendResponse(['success' => false, 'message' => 'Failed to create service']);
        }
        break;
        
    case 'PUT':
        // Update service
        $data = json_decode(file_get_contents('php://input'), true);
        
        $id = isset($data['id']) ? (int)$data['id'] : 0;
        $title = isset($data['title']) ? sanitize($conn, $data['title']) : '';
        $description = isset($data['description']) ? sanitize($conn, $data['description']) : '';
        $icon = isset($data['icon']) ? sanitize($conn, $data['icon']) : 'tools';
        $image = isset($data['image']) ? sanitize($conn, $data['image']) : '';
        $active = isset($data['active']) && $data['active'] ? 1 : 0;
        
        if (!$id) {
            sendResponse(['success' => false, 'message' => 'Invalid ID']);
        }
        
        $sql = "UPDATE services SET title = ?, description = ?, icon = ?, image = ?, is_active = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssii", $title, $description, $icon, $image, $active, $id);
        
        if ($stmt->execute()) {
            sendResponse(['success' => true, 'message' => 'Service updated successfully']);
        } else {
            sendResponse(['success' => false, 'message' => 'Failed to update service']);
        }
        break;
        
    case 'DELETE':
        // Delete service
        $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
        
        if (!$id) {
            sendResponse(['success' => false, 'message' => 'Invalid ID']);
        }
        
        $sql = "DELETE FROM services WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        
        if ($stmt->execute()) {
            sendResponse(['success' => true, 'message' => 'Service deleted successfully']);
        } else {
            sendResponse(['success' => false, 'message' => 'Failed to delete service']);
        }
        break;
        
    default:
        sendResponse(['success' => false, 'message' => 'Invalid request method']);
}

$conn->close();
?>
