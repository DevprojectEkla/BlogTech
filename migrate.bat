@echo off
activate.bat && python manage.py makemigrations && python manage.py migrate
