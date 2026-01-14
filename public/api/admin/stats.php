<?php
/**
 * Admin Dashboard Stats API
 */

require_once '../config.php';

$conn = getConnection();

// Get inquiry statistics
$newInquiries = 0;
$totalInquiries = 0;
$connectedInquiries = 0;

$result = $conn->query("SELECT COUNT(*) as count FROM inquiries WHERE status = 'new'");
if ($row = $result->fetch_assoc()) {
    $newInquiries = $row['count'];
}

$result = $conn->query("SELECT COUNT(*) as count FROM inquiries");
if ($row = $result->fetch_assoc()) {
    $totalInquiries = $row['count'];
}

$result = $conn->query("SELECT COUNT(*) as count FROM inquiries WHERE status = 'approved'");
if ($row = $result->fetch_assoc()) {
    $connectedInquiries = $row['count'];
}

// Get services count
$totalServices = 0;
$result = $conn->query("SELECT COUNT(*) as count FROM services WHERE is_active = 1");
if ($row = $result->fetch_assoc()) {
    $totalServices = $row['count'];
}

// Get portfolio count
$totalPortfolio = 0;
$result = $conn->query("SELECT COUNT(*) as count FROM portfolio");
if ($row = $result->fetch_assoc()) {
    $totalPortfolio = $row['count'];
}

// Get testimonials count
$totalTestimonials = 0;
$result = $conn->query("SELECT COUNT(*) as count FROM testimonials WHERE is_active = 1");
if ($row = $result->fetch_assoc()) {
    $totalTestimonials = $row['count'];
}

$conn->close();

sendResponse([
    'newInquiries' => $newInquiries,
    'totalInquiries' => $totalInquiries,
    'connectedInquiries' => $connectedInquiries,
    'totalServices' => $totalServices,
    'totalPortfolio' => $totalPortfolio,
    'totalTestimonials' => $totalTestimonials
]);
?>
