import os
import sys

base_dir = r'd:\Projects\cigar_box_production'

# Change to base directory
os.chdir(base_dir)

dirs = [
    'src/app',
    'src/components',
    'src/components/order',
    'src/components/planning',
    'src/types',
    'src/utils',
    'src/api',
    'src/api/routes',
    'public'
]

files = {
    'src/app/index.ts': '// Placeholder file',
    'src/components/index.ts': '',
    'src/components/order/index.ts': '',
    'src/components/planning/index.ts': '',
    'src/types/index.ts': '',
    'src/utils/index.ts': '',
    'src/api/index.ts': '',
    'src/api/routes/index.ts': '',
    'public/.gitkeep': ''
}

# Create directories
print('Creating directories...')
for d in dirs:
    os.makedirs(d, exist_ok=True)
    print(f'Created: {d}')

# Create files
print('\nCreating files...')
for file_path, content in files.items():
    with open(file_path, 'w') as f:
        f.write(content)
    print(f'Created: {file_path}')

print('\n========== SUMMARY ==========')
print('Directories created: 9')
print('TypeScript files created: 8')
print('Additional files: 1 (.gitkeep)')
print('Total items: 18')
print('\n✓ All directories and files created successfully!')

# List directory structure
print('\n========== DIRECTORY STRUCTURE ==========')
for root, dirs_list, files_list in os.walk('.'):
    level = root.replace('.', '').count(os.sep)
    indent = ' ' * 2 * level
    print(f'{indent}{os.path.basename(root)}/')
    subindent = ' ' * 2 * (level + 1)
    for file in files_list:
        print(f'{subindent}{file}')
