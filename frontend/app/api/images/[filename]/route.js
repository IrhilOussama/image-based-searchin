import path from 'path';
import fs from 'fs';

export async function GET(req, { params }) {
  const { filename } = params;  // Get the filename from the URL parameter
  const imagesDirectory = path.join(process.cwd(), '/../backend/public/images');
  const filePath = path.join(imagesDirectory, filename);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Manually set MIME type based on file extension
    const extname = path.extname(filePath).toLowerCase();
    let mimeType = '';

    switch (extname) {
      case '.jpg':
      case '.jpeg':
        mimeType = 'image/jpeg';
        break;
      case '.png':
        mimeType = 'image/png';
        break;
      case '.gif':
        mimeType = 'image/gif';
        break;
      case '.webp':
        mimeType = 'image/webp';
        break;
      default:
        mimeType = 'application/octet-stream';  // Default to binary if MIME is unknown
        break;
    }

    const image = fs.readFileSync(filePath);

    // Return the image with the correct content type
    return new Response(image, {
      status: 200,
      headers: {
        'Content-Type': mimeType,
      },
    });
  } else {
    return new Response('Image not found', { status: 404 });
  }
}
