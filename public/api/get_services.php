<?php
/**
 * Get Services API
 * Returns all active services for the website
 */

require_once 'config.php';

$conn = getConnection();

$sql = "SELECT id, title, description, icon, image FROM services WHERE is_active = 1 ORDER BY sort_order ASC";
$result = $conn->query($sql);

$services = [];
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $services[] = $row;
    }
}

$conn->close();
sendResponse($services);
?>
