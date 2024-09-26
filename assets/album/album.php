<?php
header('Content-Type: application/json');

// Define the folder path
$folderPath = 'images/'; // Change this to your folder path

// Get all files in the directory
$files = scandir($folderPath);

// Filter out the image files
$imageFiles = array_filter($files, function($file) use ($folderPath) {
    return preg_match('/\.(jpg|jpeg|png|gif|bmp|webp)$/i', $file) && is_file($folderPath . $file);
});

// Build an array of image URLs
$imageUrls = array_map(function($image) use ($folderPath) {
    return $folderPath . $image;
}, $imageFiles);

// Return JSON response
echo json_encode($imageUrls);