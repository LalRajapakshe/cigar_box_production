@echo off
setlocal enabledelayedexpansion

REM Script to create directory structure and files

echo Creating directories...
if not exist "src\app" mkdir "src\app"
if not exist "src\components" mkdir "src\components"
if not exist "src\components\order" mkdir "src\components\order"
if not exist "src\components\planning" mkdir "src\components\planning"
if not exist "src\types" mkdir "src\types"
if not exist "src\utils" mkdir "src\utils"
if not exist "src\api" mkdir "src\api"
if not exist "src\api\routes" mkdir "src\api\routes"
if not exist "public" mkdir "public"

echo Creating placeholder files...

echo // Placeholder file > src\app\index.ts
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

type nul > public\.gitkeep
echo Created: public\.gitkeep

echo.
echo ========== SUMMARY ==========
echo Directories created: 9
echo TypeScript files created: 8
echo Additional files: 1 (.gitkeep)
echo Total items: 18
echo.
echo ========== DIRECTORY STRUCTURE ==========
tree /F
