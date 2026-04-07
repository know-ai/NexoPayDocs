const fs = require('fs');
const path = require('path');

const SRC = __dirname + '/..';
const DEST = SRC + '/public';

const STATIC_DIRS = ['css', 'img', 'mvp'];
const HTML_FILES = fs.readdirSync(SRC).filter(f => f.endsWith('.html'));

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function copyDir(src, dest) {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function minifyHTML(html) {
  return html
    .replace(/<!--(?!\[)[\s\S]*?-->/g, '')
    .replace(/^\s+/gm, '')
    .replace(/\n{2,}/g, '\n');
}

console.log('🔨 Building NexoPay documentation...\n');

ensureDir(DEST);

for (const dir of STATIC_DIRS) {
  const srcDir = path.join(SRC, dir);
  if (fs.existsSync(srcDir)) {
    copyDir(srcDir, path.join(DEST, dir));
    console.log(`  ✓ Copied ${dir}/`);
  }
}

for (const file of HTML_FILES) {
  const content = fs.readFileSync(path.join(SRC, file), 'utf8');
  const minified = minifyHTML(content);
  fs.writeFileSync(path.join(DEST, file), minified, 'utf8');
  const saved = ((1 - minified.length / content.length) * 100).toFixed(1);
  console.log(`  ✓ ${file} (${saved}% smaller)`);
}

const extras = ['favicon.svg', 'robots.txt', 'sitemap.xml', '404.html'];
for (const file of extras) {
  const srcPath = path.join(SRC, file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, path.join(DEST, file));
    console.log(`  ✓ ${file}`);
  }
}

console.log('\n✅ Build complete! Output in /public\n');
