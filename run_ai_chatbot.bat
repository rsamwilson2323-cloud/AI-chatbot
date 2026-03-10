@echo off
title AI Chatbot Server

echo Starting AI Chatbot...

REM Go to project folder
cd /d "D:\main coding\AI chatbot"

REM Start Node server
start cmd /k node server.js

REM Wait for server to start
timeout /t 3 >nul

REM Open chatbot UI
start "" "index.html"

echo.
echo ✅ AI Chatbot started successfully!
pause
