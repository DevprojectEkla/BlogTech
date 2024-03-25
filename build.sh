#!/usr/bin/env sh

######################################################################
# @author      : DevEkla (ekla@ArchLinuxEkla)
# @file        : build
# @created     : vendredi mars 22, 2024 16:06:04 CET
#
# @description : 
######################################################################

set -o errexit

handle_error(){
    echo "an error occured. Continuing with the build..."
}

echo Building...
pip install -r requirements.txt
python manage.py collectstatic --no-input
python manage.py makemigrations
python manage.py migrate
if ! python manage.py createsuperuser --noinput ; then
    handle_error
fi

