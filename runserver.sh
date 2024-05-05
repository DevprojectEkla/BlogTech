#!/bin/bash
# lance mon server
source env/bin/activate
pkill gunicorn
gunicorn Blog.wsgi:application &
