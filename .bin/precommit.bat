@echo off

echo ******** Running StyleLint ********
call npm run lintStyles

if %ERRORLEVEL% GEQ 1 exit /B 2

echo ******** Running ES Lint ********
call npm run lint

if %ERRORLEVEL% GEQ 1 exit /B 2

echo ******** Running Unit Tests ********
call npm run test

if %ERRORLEVEL% GEQ 1 exit /B 2
