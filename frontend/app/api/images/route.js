import path from 'path';
import fs from 'fs';

export async function GET() {
  // Define the directory where images are stored
  const imagesDirectory = path.join(process.cwd(), '/../backend/public/images');
  
  // Check if the directory exists
  if (!fs.existsSync(imagesDirectory)) {
    return new Response('Directory not found', { status: 404 });
  }

  // Read all files in the directory
  const filenames = fs.readdirSync(imagesDirectory);

  // Filter only image files (optional, depending on your use case)
  const imageFiles = filenames.filter((filename) => {
    const extname = path.extname(filename).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(extname);
  });

  // Create an array of objects with image names
  const images = imageFiles.map((filename) => ({
    'image-name': filename,
  }));

  // Return the array of objects as JSON
  return new Response(JSON.stringify(images), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
