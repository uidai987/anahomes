<?php
/**
 * Get Portfolio API
 * Returns all portfolio projects for the website
 */

require_once 'config.php';

$conn = getConnection();

$sql = "SELECT id, title, category, description, image, location, year, area, budget, tags FROM portfolio ORDER BY created_at DESC";
$result = $conn->query($sql);

$portfolio = [];
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Parse JSON tags
        $row['tags'] = json_decode($row['tags'], true) ?: [];
        $portfolio[] = $row;
    }
}

$conn->close();
sendResponse($portfolio);
?>
