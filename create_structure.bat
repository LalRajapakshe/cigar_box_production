@echo off
setlocal enabledelayedexpansion

cd /d d:\Projects\cigar_box_production

REM Create directories
echo Creating directories...
mkdir src\app 2>nul
mkdir src\components 2>nul
mkdir src\components\order 2>nul
mkdir src\components\planning 2>nul
mkdir src\types 2>nul
mkdir src\utils 2>nul
mkdir src\api 2>nul
mkdir src\api\routes 2>nul
mkdir public 2>nul

echo.
echo Creating placeholder files...

REM Create TypeScript placeholder files
(echo // Placeholder file) > src\app\index.ts
echo Created: src\app\index.ts

type nul > src\components\index.ts
echo Created: src\components\index.ts

type nul > src\components\order\index.ts
echo Created: src\components\order\index.ts

type nul > src\components\planning\index.ts
echo Created: src\components\planning\index.ts

type nul > src\types\index.ts
echo Created: src\types\index.ts

type nul > src\utils\index.ts
echo Created: src\utils\index.ts

type nul > src\api\index.ts
echo Created: src\api\index.ts

type nul > src\api\routes\index.ts
echo Created: src\api\routes\index.ts

REM Create .gitkeep
type nul > public\.gitkeep
echo Created: public\.gitkeep

echo.
echo ========== SUMMARY ==========
echo Directories created: 9
echo TypeScript files created: 8
echo Additional files: 1 (.gitkeep)
echo Total items: 18
echo.
echo Directory structure:
tree /F
