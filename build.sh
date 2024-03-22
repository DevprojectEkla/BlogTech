#!/usr/bin/env sh

######################################################################
# @author      : DevEkla (ekla@ArchLinuxEkla)
# @file        : build
# @created     : vendredi mars 22, 2024 16:06:04 CET
#
# @description : 
######################################################################

set -o errexit
pip install -r requirements.txt
python manage.py collectstatic --no-input
python manage.py makemigrations
python manage.py migrate
