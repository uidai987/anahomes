<?php
/**
 * Get Testimonials API
 * Returns all active testimonials for the website
 */

require_once 'config.php';

$conn = getConnection();

$sql = "SELECT id, name, position, text, image, rating FROM testimonials WHERE is_active = 1 ORDER BY created_at DESC";
$result = $conn->query($sql);

$testimonials = [];
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $row['rating'] = (int)$row['rating'];
        $testimonials[] = $row;
    }
}

$conn->close();
sendResponse($testimonials);
?>
