const fs = require('fs');
const path = require('path');

const baseDir = 'd:\\Projects\\cigar_box_production';

const dirs = [
  'src/app',
  'src/components',
  'src/components/order',
  'src/components/planning',
  'src/types',
  'src/utils',
  'src/api',
  'src/api/routes',
  'public'
];

const files = {
  'src/app/index.ts': '// Placeholder file',
  'src/components/index.ts': '',
  'src/components/order/index.ts': '',
  'src/components/planning/index.ts': '',
  'src/types/index.ts': '',
  'src/utils/index.ts': '',
  'src/api/index.ts': '',
  'src/api/routes/index.ts': '',
  'public/.gitkeep': ''
};

// Create directories
console.log('Creating directories...');
dirs.forEach(d => {
  const fullPath = path.join(baseDir, d);
  fs.mkdirSync(fullPath, { recursive: true });
  console.log(`Created: ${d}`);
});

// Create files
console.log('\nCreating files...');
Object.entries(files).forEach(([filePath, content]) => {
  const fullPath = path.join(baseDir, filePath);
  fs.writeFileSync(fullPath, content);
  console.log(`Created: ${filePath}`);
});

console.log('\n========== SUMMARY ==========');
console.log('Directories created: 9');
console.log('TypeScript files created: 8');
console.log('Additional files: 1 (.gitkeep)');
console.log('Total items: 18');
console.log('\n✓ All directories and files created successfully!');
