/**
 * Build & Asset Verification Script for Castaway's Horizon
 */

const fs = require('fs');
const path = require('path');

console.log('--- Starting Build & Verification for Castaway\'s Horizon ---');

const requiredFiles = [
    'index.html',
    'style.css',
    'package.json',
    'server.js'
];

let errors = 0;
for (const file of requiredFiles) {
    const full = path.join(__dirname, file);
    if (!fs.existsSync(full)) {
        console.error(`[ERROR] Missing core file: ${file}`);
        errors++;
    } else {
        console.log(`[OK] Verified ${file}`);
    }
}

const jsDir = path.join(__dirname, 'js');
if (fs.existsSync(jsDir)) {
    const jsFiles = fs.readdirSync(jsDir).filter(f => f.endsWith('.js'));
    console.log(`[OK] Verified ${jsFiles.length} JavaScript game modules in js/`);
} else {
    console.error('[ERROR] Missing js/ directory');
    errors++;
}

if (errors > 0) {
    console.error(`Build failed with ${errors} error(s).`);
    process.exit(1);
} else {
    console.log('--- Build & Verification Succeeded 100% ---');
    process.exit(0);
}
