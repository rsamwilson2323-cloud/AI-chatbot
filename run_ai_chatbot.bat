@echo off
title AI Chatbot Server

REM Go to project folder
cd /d "D:\html coding\AI chatbot UI design"

REM Start Node server in a new CMD window
start cmd /k "node server.js"

REM Wait 3 seconds to let server start
timeout /t 3 >nul

REM Open the chatbot UI in default browser
start "" "index.html"

echo AI Chatbot started successfully.
