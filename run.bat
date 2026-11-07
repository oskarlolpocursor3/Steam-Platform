@echo off
setlocal
cd /d "%~dp0"
if exist "build\bin\Release\steam_client.exe" (
    start "" "build\bin\Release\steam_client.exe"
) else (
    echo [ERROR] Binary build\bin\Release\steam_client.exe not found!
    echo Please run build.bat first.
    pause
)
