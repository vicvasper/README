const sharp = require('sharp');
const fs = require('fs');
const inFile = 'site/photo_original.jpg';
const out1 = 'site/photo.jpg';
const out2 = 'site/photo_cropped.jpg';

if (!fs.existsSync(inFile)) {
  console.error('Place original photo at ' + inFile + ' and re-run.');
  process.exit(1);
}

(async () => {
  // create a resized full color version
  await sharp(inFile).resize(600, 600, { fit: 'cover' }).toFile(out1);
  // create a tightly cropped headshot
  try {
    const metadata = await sharp(inFile).metadata();
    const size = Math.min(metadata.width || 600, metadata.height || 600);
    const left = Math.floor(((metadata.width || size) - size) / 2);
    const top = Math.floor(((metadata.height || size) - size) / 2);
    await sharp(inFile).extract({ left, top, width: size, height: size }).resize(320, 320).toFile(out2);
  } catch (e) {
    await sharp(inFile).resize(320, 320, { fit: 'cover' }).toFile(out2);
  }
  console.log('Generated ' + out1 + ' and ' + out2);
})();
