#!/bin/bash
# lance mon server
source env/bin/activate
python manage.py makemigrations
python manage.py migrate
