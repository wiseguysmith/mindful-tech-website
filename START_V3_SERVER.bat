@echo off
echo ========================================
echo  Starting Mindful Tech V3 Server
echo ========================================
cd /d "%~dp0"
echo Current directory: %CD%
echo.
echo Starting Next.js development server...
echo Once you see "Ready", open your browser to:
echo http://localhost:3000
echo.
npm run dev
pause
