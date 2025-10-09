@echo off
echo ========================================
echo  CTO APPROVED: Starting V3 Server
echo ========================================
cd /d "%~dp0"
echo.
echo Current directory: %CD%
echo.
echo Killing any existing servers...
taskkill /F /IM node.exe 2>nul
echo.
echo Starting fresh server...
echo.
npm run dev
pause
