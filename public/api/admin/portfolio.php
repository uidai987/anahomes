<?php
/**
 * Admin Portfolio API
 * CRUD operations for portfolio management
 */

require_once '../config.php';

$conn = getConnection();
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Get all portfolio items
        $sql = "SELECT * FROM portfolio ORDER BY created_at DESC";
        $result = $conn->query($sql);
        $portfolio = [];
        
        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $row['tags'] = json_decode($row['tags'], true) ?: [];
                $portfolio[] = $row;
            }
        }
        
        sendResponse($portfolio);
        break;
        
    case 'POST':
        // Create new portfolio item
        $title = isset($_POST['title']) ? sanitize($conn, $_POST['title']) : '';
        $category = isset($_POST['category']) ? sanitize($conn, $_POST['category']) : 'residential';
        $description = isset($_POST['description']) ? sanitize($conn, $_POST['description']) : '';
        $image = isset($_POST['image']) ? sanitize($conn, $_POST['image']) : '';
        $location = isset($_POST['location']) ? sanitize($conn, $_POST['location']) : '';
        $year = isset($_POST['year']) ? sanitize($conn, $_POST['year']) : '';
        $area = isset($_POST['area']) ? sanitize($conn, $_POST['area']) : '';
        $budget = isset($_POST['budget']) ? sanitize($conn, $_POST['budget']) : '';
        $tags = isset($_POST['tags']) ? $_POST['tags'] : '[]';
        
        // Convert tags string to JSON if necessary
        if (!is_array($tags)) {
            $tagsArray = array_map('trim', explode(',', $tags));
            $tags = json_encode($tagsArray);
        } else {
            $tags = json_encode($tags);
        }
        
        if (empty($title)) {
            sendResponse(['success' => false, 'message' => 'Title is required']);
        }
        
        $sql = "INSERT INTO portfolio (title, category, description, image, location, year, area, budget, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssssss", $title, $category, $description, $image, $location, $year, $area, $budget, $tags);
        
        if ($stmt->execute()) {
            sendResponse([
                'success' => true, 
                'message' => 'Project created successfully',
                'id' => $stmt->insert_id
            ]);
        } else {
            sendResponse(['success' => false, 'message' => 'Failed to create project']);
        }
        break;
        
    case 'PUT':
        // Update portfolio item
        $data = json_decode(file_get_contents('php://input'), true);
        
        $id = isset($data['id']) ? (int)$data['id'] : 0;
        $title = isset($data['title']) ? sanitize($conn, $data['title']) : '';
        $category = isset($data['category']) ? sanitize($conn, $data['category']) : 'residential';
        $description = isset($data['description']) ? sanitize($conn, $data['description']) : '';
        $image = isset($data['image']) ? sanitize($conn, $data['image']) : '';
        $location = isset($data['location']) ? sanitize($conn, $data['location']) : '';
        $year = isset($data['year']) ? sanitize($conn, $data['year']) : '';
        $area = isset($data['area']) ? sanitize($conn, $data['area']) : '';
        $budget = isset($data['budget']) ? sanitize($conn, $data['budget']) : '';
        $tags = isset($data['tags']) ? json_encode($data['tags']) : '[]';
        
        if (!$id) {
            sendResponse(['success' => false, 'message' => 'Invalid ID']);
        }
        
        $sql = "UPDATE portfolio SET title = ?, category = ?, description = ?, image = ?, location = ?, year = ?, area = ?, budget = ?, tags = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssssssi", $title, $category, $description, $image, $location, $year, $area, $budget, $tags, $id);
        
        if ($stmt->execute()) {
            sendResponse(['success' => true, 'message' => 'Project updated successfully']);
        } else {
            sendResponse(['success' => false, 'message' => 'Failed to update project']);
        }
        break;
        
    case 'DELETE':
        // Delete portfolio item
        $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
        
        if (!$id) {
            sendResponse(['success' => false, 'message' => 'Invalid ID']);
        }
        
        $sql = "DELETE FROM portfolio WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        
        if ($stmt->execute()) {
            sendResponse(['success' => true, 'message' => 'Project deleted successfully']);
        } else {
            sendResponse(['success' => false, 'message' => 'Failed to delete project']);
        }
        break;
        
    default:
        sendResponse(['success' => false, 'message' => 'Invalid request method']);
}

$conn->close();
?>
