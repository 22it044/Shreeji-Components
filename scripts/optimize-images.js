import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Configuration
const config = {
  inputDir: 'public/images',
  outputDir: 'public/images/optimized',
  sizes: [400, 800, 1200, 1920],
  quality: {
    webp: 80,
    jpeg: 75,
    png: 80
  },
  // Critical images that need priority optimization (LCP images)
  criticalImages: [
    'Hero section/Gemini_Generated_Image_j3idb3j3idb3j3id.png'
  ]
};

// Ensure output directory exists
function ensureDirectoryExists(directory) {
  const dirs = directory.split(path.sep);
  let currentPath = '';
  
  for (const dir of dirs) {
    currentPath = currentPath ? path.join(currentPath, dir) : dir;
    if (!fs.existsSync(currentPath)) {
      fs.mkdirSync(currentPath);
    }
  }
}

// Process a single image
async function processImage(filePath, isLCP = false) {
  try {
    const fileInfo = path.parse(filePath);
    const relativePath = path.relative(config.inputDir, filePath);
    const dirPath = path.dirname(relativePath);
    const outputDirPath = path.join(config.outputDir, dirPath);
    
    ensureDirectoryExists(outputDirPath);
    
    // Load the image
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Generate different sizes
    for (const width of config.sizes) {
      // Skip sizes larger than the original image
      if (metadata.width && width > metadata.width) continue;
      
      // Create WebP version
      await image
        .resize({ width })
        .webp({ quality: config.quality.webp })
        .toFile(path.join(outputDirPath, `${fileInfo.name}-${width}w.webp`));
      
      // Create fallback version in original format
      if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
        await image
          .resize({ width })
          .jpeg({ quality: config.quality.jpeg })
          .toFile(path.join(outputDirPath, `${fileInfo.name}-${width}w.jpg`));
      } else if (metadata.format === 'png') {
        await image
          .resize({ width })
          .png({ quality: config.quality.png })
          .toFile(path.join(outputDirPath, `${fileInfo.name}-${width}w.png`));
      }
      
      // Generate AVIF for LCP images
      if (isLCP) {
        await image
          .resize({ width })
          .avif({ quality: config.quality.webp })
          .toFile(path.join(outputDirPath, `${fileInfo.name}-${width}w.avif`));
      }
    }
    
    console.log(`✅ Processed: ${relativePath}`);
    return relativePath;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
    return null;
  }
}

// Process all images in a directory recursively
async function processDirectory(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const processedImages = [];
  
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      const subDirResults = await processDirectory(fullPath);
      processedImages.push(...subDirResults);
    } else {
      // Check if it's an image file
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        const relativePath = path.relative(config.inputDir, fullPath);
        const isLCP = config.criticalImages.includes(relativePath);
        const result = await processImage(fullPath, isLCP);
        if (result) processedImages.push(result);
      }
    }
  }
  
  return processedImages;
}

// Main function
async function main() {
  console.log('🖼️ Starting image optimization...');
  
  // Create output directory if it doesn't exist
  ensureDirectoryExists(config.outputDir);
  
  // Process critical images first
  console.log('🔥 Processing critical LCP images...');
  for (const criticalImage of config.criticalImages) {
    const fullPath = path.join(config.inputDir, criticalImage);
    if (fs.existsSync(fullPath)) {
      await processImage(fullPath, true);
    } else {
      console.warn(`⚠️ Critical image not found: ${fullPath}`);
    }
  }
  
  // Process all other images
  console.log('📸 Processing remaining images...');
  await processDirectory(config.inputDir);
  
  console.log('✨ Image optimization complete!');
}

main().catch(console.error);