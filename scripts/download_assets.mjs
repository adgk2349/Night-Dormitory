import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { execSync } from 'child_process';

const ASSETS_DIR = path.resolve(process.cwd(), 'assets');

// Helper to download file
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const get = url.startsWith('https') ? https.get : http.get;
    
    const request = get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, response => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        let redirectUrl = response.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const parsed = new URL(url);
          redirectUrl = `${parsed.protocol}//${parsed.host}${redirectUrl}`;
        }
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        return downloadFile(redirectUrl, destPath).then(resolve).catch(reject);
      }

      if (response.statusCode !== 200) {
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        return reject(new Error(`Failed to download ${url}: status code ${response.statusCode}`));
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(destPath));
      });
    });

    request.on('error', err => {
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(err);
    });
  });
}

async function main() {
  console.log('🚀 Starting CC0 Asset Download...');

  const tempDir = path.resolve(process.cwd(), 'scratch_assets');
  fs.mkdirSync(tempDir, { recursive: true });

  // 1. Download Kenney Furniture Kit (3D Models - Desk, Chair, Bed, Props)
  console.log('\n📦 Downloading Kenney Furniture Kit (3D Models)...');
  const furnitureZipUrl = 'https://kenney.nl/content/3-assets/42-furniture-kit/furniture-kit.zip';
  const furnitureZipPath = path.join(tempDir, 'furniture-kit.zip');
  try {
    await downloadFile(furnitureZipUrl, furnitureZipPath);
    console.log('✓ Downloaded Furniture Kit. Extracting...');
    execSync(`unzip -q -o "${furnitureZipPath}" -d "${tempDir}/furniture"`);
    
    // Copy GLTF / OBJ models into assets/models/furniture
    const targetModelDir = path.join(ASSETS_DIR, 'models', 'furniture');
    fs.mkdirSync(targetModelDir, { recursive: true });
    
    // Look for Models/glTF or Models/OBJ or Models/FBX
    const sourceGltfDir = path.join(tempDir, 'furniture', 'Models', 'glTF');
    const sourceObjDir = path.join(tempDir, 'furniture', 'Models', 'OBJ format');
    const sourceFbxDir = path.join(tempDir, 'furniture', 'Models', 'FBX format');

    const sourceDir = fs.existsSync(sourceGltfDir) ? sourceGltfDir :
                      fs.existsSync(sourceFbxDir) ? sourceFbxDir : sourceObjDir;

    if (fs.existsSync(sourceDir)) {
      execSync(`cp -R "${sourceDir}/"* "${targetModelDir}/"`);
      console.log(`✓ Installed furniture 3D models into ${targetModelDir}`);
    }
  } catch (err) {
    console.error('⚠️ Furniture Kit download failed:', err.message);
  }

  // 2. Download Kenney Digital Audio (UI Beeps / Elevator Beep)
  console.log('\n📦 Downloading Kenney Digital Audio (UI / Beeps)...');
  const digitalAudioZip = 'https://kenney.nl/content/3-assets/107-digital-audio/digital-audio.zip';
  const digitalAudioZipPath = path.join(tempDir, 'digital-audio.zip');
  try {
    await downloadFile(digitalAudioZip, digitalAudioZipPath);
    console.log('✓ Downloaded Digital Audio. Extracting...');
    execSync(`unzip -q -o "${digitalAudioZipPath}" -d "${tempDir}/digital-audio"`);
    const targetSfxDir = path.join(ASSETS_DIR, 'audio', 'sfx');
    fs.mkdirSync(targetSfxDir, { recursive: true });
    
    const audioFolder = path.join(tempDir, 'digital-audio', 'Audio');
    if (fs.existsSync(audioFolder)) {
      execSync(`cp "${audioFolder}/"* "${targetSfxDir}/"`);
      console.log(`✓ Installed UI & Beep audio into ${targetSfxDir}`);
    }
  } catch (err) {
    console.error('⚠️ Digital Audio download failed:', err.message);
  }

  // 3. Download Kenney Impact Sounds (Footsteps & Impact Foley)
  console.log('\n📦 Downloading Kenney Impact Sounds (Footsteps & Foley)...');
  const impactAudioZip = 'https://kenney.nl/content/3-assets/111-impact-sounds/impact-sounds.zip';
  const impactAudioZipPath = path.join(tempDir, 'impact-sounds.zip');
  try {
    await downloadFile(impactAudioZip, impactAudioZipPath);
    console.log('✓ Downloaded Impact Audio. Extracting...');
    execSync(`unzip -q -o "${impactAudioZipPath}" -d "${tempDir}/impact-audio"`);
    const targetSfxDir = path.join(ASSETS_DIR, 'audio', 'sfx');
    
    const impactFolder = path.join(tempDir, 'impact-audio', 'Audio');
    if (fs.existsSync(impactFolder)) {
      execSync(`cp "${impactFolder}/"* "${targetSfxDir}/"`);
      console.log(`✓ Installed footsteps & impact audio into ${targetSfxDir}`);
    }
  } catch (err) {
    console.error('⚠️ Impact Audio download failed:', err.message);
  }

  // 4. Download ambientCG Textures (CC0 PBR 1K JPGs)
  console.log('\n📦 Downloading ambientCG Textures (Wallpaper, Wood Floor, Concrete, Metal)...');
  const textures = [
    { id: 'Wallpaper001', folder: 'wallpaper' },
    { id: 'WoodFloor041', folder: 'floor' },
    { id: 'Concrete020', folder: 'concrete' },
    { id: 'Metal030', folder: 'metal' }
  ];

  for (const tex of textures) {
    const texZipUrl = `https://ambientcg.com/get?file=${tex.id}_1K-JPG.zip`;
    const texZipPath = path.join(tempDir, `${tex.id}.zip`);
    const texDestDir = path.join(ASSETS_DIR, 'textures', tex.folder);
    fs.mkdirSync(texDestDir, { recursive: true });

    try {
      console.log(`  - Fetching ${tex.id}...`);
      await downloadFile(texZipUrl, texZipPath);
      execSync(`unzip -q -o "${texZipPath}" -d "${texDestDir}"`);
      console.log(`  ✓ Installed ${tex.id} into textures/${tex.folder}`);
    } catch (err) {
      console.error(`  ⚠️ Texture ${tex.id} failed:`, err.message);
    }
  }

  // 5. Clean up temporary directory
  console.log('\n🧹 Cleaning up temporary scratch files...');
  execSync(`rm -rf "${tempDir}"`);

  console.log('\n✨ Asset download & organization completed successfully!');
}

main().catch(err => {
  console.error('Error in main execution:', err);
});
