# Start Mindful Tech v2 Development Server
Write-Host "Starting Mindful Tech v2 Development Server..." -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (Test-Path "package.json") {
    Write-Host "✓ Found package.json" -ForegroundColor Green
    
    # Kill any existing process on port 3000
    $process = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
    if ($process) {
        Write-Host "✓ Killing existing process on port 3000..." -ForegroundColor Yellow
        Stop-Process -Id $process.OwningProcess -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 2
    }
    
    # Start the dev server
    Write-Host "✓ Starting Next.js dev server..." -ForegroundColor Green
    Write-Host ""
    npm run dev
} else {
    Write-Host "✗ Error: package.json not found!" -ForegroundColor Red
    Write-Host "Please run this script from the mindful-tech directory" -ForegroundColor Red
}

