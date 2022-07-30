@echo off
cd env/Scripts
activate.bat & cd.. & cd.. & firefox 127.0.0.1:8000 & py manage.py runserver 


