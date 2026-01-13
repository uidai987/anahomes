<?php
/**
 * Admin Testimonials API
 * CRUD operations for testimonials management
 */

require_once '../config.php';

$conn = getConnection();
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Get all testimonials
        $sql = "SELECT * FROM testimonials ORDER BY created_at DESC";
        $result = $conn->query($sql);
        $testimonials = [];
        
        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $row['rating'] = (int)$row['rating'];
                $testimonials[] = $row;
            }
        }
        
        sendResponse($testimonials);
        break;
        
    case 'POST':
        // Create new testimonial
        $name = isset($_POST['name']) ? sanitize($conn, $_POST['name']) : '';
        $position = isset($_POST['position']) ? sanitize($conn, $_POST['position']) : '';
        $text = isset($_POST['text']) ? sanitize($conn, $_POST['text']) : '';
        $image = isset($_POST['image']) ? sanitize($conn, $_POST['image']) : '';
        $rating = isset($_POST['rating']) ? (int)$_POST['rating'] : 5;
        
        if (empty($name) || empty($text)) {
            sendResponse(['success' => false, 'message' => 'Name and text are required']);
        }
        
        $sql = "INSERT INTO testimonials (name, position, text, image, rating) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssi", $name, $position, $text, $image, $rating);
        
        if ($stmt->execute()) {
            sendResponse([
                'success' => true, 
                'message' => 'Testimonial created successfully',
                'id' => $stmt->insert_id
            ]);
        } else {
            sendResponse(['success' => false, 'message' => 'Failed to create testimonial']);
        }
        break;
        
    case 'PUT':
        // Update testimonial
        $data = json_decode(file_get_contents('php://input'), true);
        
        $id = isset($data['id']) ? (int)$data['id'] : 0;
        $name = isset($data['name']) ? sanitize($conn, $data['name']) : '';
        $position = isset($data['position']) ? sanitize($conn, $data['position']) : '';
        $text = isset($data['text']) ? sanitize($conn, $data['text']) : '';
        $image = isset($data['image']) ? sanitize($conn, $data['image']) : '';
        $rating = isset($data['rating']) ? (int)$data['rating'] : 5;
        
        if (!$id) {
            sendResponse(['success' => false, 'message' => 'Invalid ID']);
        }
        
        $sql = "UPDATE testimonials SET name = ?, position = ?, text = ?, image = ?, rating = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssii", $name, $position, $text, $image, $rating, $id);
        
        if ($stmt->execute()) {
            sendResponse(['success' => true, 'message' => 'Testimonial updated successfully']);
        } else {
            sendResponse(['success' => false, 'message' => 'Failed to update testimonial']);
        }
        break;
        
    case 'DELETE':
        // Delete testimonial
        $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
        
        if (!$id) {
            sendResponse(['success' => false, 'message' => 'Invalid ID']);
        }
        
        $sql = "DELETE FROM testimonials WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        
        if ($stmt->execute()) {
            sendResponse(['success' => true, 'message' => 'Testimonial deleted successfully']);
        } else {
            sendResponse(['success' => false, 'message' => 'Failed to delete testimonial']);
        }
        break;
        
    default:
        sendResponse(['success' => false, 'message' => 'Invalid request method']);
}

$conn->close();
?>
