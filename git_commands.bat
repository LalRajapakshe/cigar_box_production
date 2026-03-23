@echo off
cd /d d:\Projects\cigar_box_production

echo Executing: git add .
git add .

echo.
echo Executing: git commit -m "feat: Initial project setup..."
git commit -m "feat: Initial project setup with Next.js, Tailwind, and UI components

- Add package.json with dependencies (Next.js, React, Tailwind, TypeScript)
- Configure TypeScript with tsconfig.json
- Setup Tailwind CSS and PostCSS configuration
- Create Next.js app layout and home page
- Implement OrderInputForm component for order creation
- Implement OrderPlanningComponent with cutting plan calculations
- Add calculationUtils.ts with sheet plan calculation logic
- Add type definitions for Order, BoxType, Surface, and SheetPlan
- Add globals.css with Tailwind base styles
- Add SETUP.md with project documentation

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

echo.
echo Executing: git log --oneline -1
git log --oneline -1

echo.
echo Executing: git status
git status
