<?php
/**
 * Admin Dashboard Stats API
 * Returns statistics for the dashboard
 */

require_once '../config.php';

$conn = getConnection();

// Get inquiry stats
$newInquiries = 0;
$totalInquiries = 0;
$connectedInquiries = 0;

$sql = "SELECT 
    COUNT(*) as total,
    SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) as new_count,
    SUM(CASE WHEN status = 'approved' THEN 1 ELSE 0 END) as approved_count
    FROM inquiries";
$result = $conn->query($sql);
if ($result && $row = $result->fetch_assoc()) {
    $totalInquiries = (int)$row['total'];
    $newInquiries = (int)$row['new_count'];
    $connectedInquiries = (int)$row['approved_count'];
}

// Get active services count
$activeServices = 0;
$sql = "SELECT COUNT(*) as count FROM services WHERE is_active = 1";
$result = $conn->query($sql);
if ($result && $row = $result->fetch_assoc()) {
    $activeServices = (int)$row['count'];
}

// Get portfolio count
$portfolioCount = 0;
$sql = "SELECT COUNT(*) as count FROM portfolio";
$result = $conn->query($sql);
if ($result && $row = $result->fetch_assoc()) {
    $portfolioCount = (int)$row['count'];
}

// Get recent inquiries
$recentInquiries = [];
$sql = "SELECT id, name, email, phone, service, status, created_at FROM inquiries ORDER BY created_at DESC LIMIT 5";
$result = $conn->query($sql);
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $row['date'] = date('Y-m-d', strtotime($row['created_at']));
        $recentInquiries[] = $row;
    }
}

sendResponse([
    'success' => true,
    'data' => [
        'stats' => [
            'newInquiries' => $newInquiries,
            'totalInquiries' => $totalInquiries,
            'connectedInquiries' => $connectedInquiries,
            'activeServices' => $activeServices,
            'portfolioCount' => $portfolioCount
        ],
        'recentInquiries' => $recentInquiries
    ]
]);

$conn->close();
?>
