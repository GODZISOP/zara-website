/**
 * AUTOMATED 1-CLICK CLIENT STORE GENERATOR & VERCEL DEPLOYER
 * 
 * Usage:
 *   node scripts/auto-deploy-client.mjs "Client Name" "store-slug"
 * 
 * Example:
 *   node scripts/auto-deploy-client.mjs "Hasan Farid LLC" "hasanfarid"
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const clientName = process.argv[2] || 'New Client Store';
const clientSlug = process.argv[3] || clientName.toLowerCase().replace(/[^a-z0-9]/g, '-');

console.log(`\n======================================================`);
console.log(`🚀 AUTOMATED STORE FACTORY`);
console.log(`Creating Client: "${clientName}" (${clientSlug})`);
console.log(`======================================================\n`);

const targetDir = path.resolve(ROOT_DIR, '..', clientSlug);

// 1. Create Target Directory if not exists
if (!fs.existsSync(targetDir)) {
  console.log(`📁 1. Creating folder: ${targetDir}`);
  fs.mkdirSync(targetDir, { recursive: true });
} else {
  console.log(`ℹ️ Folder already exists, updating configuration...`);
}

// 2. Files to Copy (Ignoring node_modules, .git, dist)
const filesToCopy = ['src', 'public', 'index.html', 'package.json', 'vite.config.js'];

console.log(`📦 2. Cloning master template code...`);
for (const item of filesToCopy) {
  const srcPath = path.join(ROOT_DIR, item);
  const destPath = path.join(targetDir, item);
  if (fs.existsSync(srcPath)) {
    fs.cpSync(srcPath, destPath, { recursive: true });
  }
}

// 3. Write Client Specific .env
console.log(`⚙️ 3. Configuring environment variables for ${clientSlug}...`);
const envContent = `VITE_SUPABASE_URL=${process.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'}
VITE_SUPABASE_ANON_KEY=${process.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'}
VITE_STORE_ID=${clientSlug}
`;
fs.writeFileSync(path.join(targetDir, '.env'), envContent, 'utf-8');

// 4. Update package.json name
const pkgJsonPath = path.join(targetDir, 'package.json');
if (fs.existsSync(pkgJsonPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
  pkg.name = clientSlug;
  fs.writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2), 'utf-8');
}

console.log(`\n✅ Client Store created locally at: ${targetDir}`);
console.log(`\n🚀 4. To deploy automatically to Vercel in 30 seconds:`);
console.log(`   cd "${targetDir}"`);
console.log(`   npx vercel --yes --prod`);
console.log(`\n======================================================\n`);
