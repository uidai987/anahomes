<?php
/**
 * Database Configuration
 * Update these settings with your MySQL database credentials
 */

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'buildcraft_db');

// Create database connection
function getConnection() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if ($conn->connect_error) {
        die(json_encode(['success' => false, 'message' => 'Database connection failed']));
    }
    
    $conn->set_charset("utf8mb4");
    return $conn;
}

// Helper function to send JSON response
function sendResponse($data) {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header('Access-Control-Allow-Headers: Content-Type');
    echo json_encode($data);
    exit;
}

// Helper function for input sanitization
function sanitize($conn, $input) {
    return $conn->real_escape_string(htmlspecialchars(trim($input)));
}
?>
