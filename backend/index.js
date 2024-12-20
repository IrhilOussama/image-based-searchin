// const express = require("express");
const path = require("path");
const http = require("http");
const url = require("url");
const fs = require("fs");
const PORT = 8000;

// Read similarities data
const similaritiesPath = path.join(__dirname, 'similarities.json');
const similaritiesData = JSON.parse(fs.readFileSync(similaritiesPath, 'utf8'));

const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    // Parse the URL
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Route for finding similar images
    if (pathname.startsWith('/similar/')) {
        const imageName = pathname.split('/')[2];
        
        // Find the image in similarities data
        const similarImage = Object.values(similaritiesData).find(
            item => item.image_name === imageName
        );

        if (similarImage) {
            res.statusCode = 200;
            res.end(JSON.stringify(similarImage.similar_images));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Image not found' }));
        }
        return;
    }

    // Default route
    // res.statusCode = 404;
    // res.end(JSON.stringify({ error: 'Not Found' }));
    res.end()
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});