#!/bin/bash
# lance mon server
source env/bin/activate
python manage.py runserver &
firefox 127.0.0.1:8000
