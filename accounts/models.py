from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class BlogVisitor(AbstractUser):
    """ la classe Abstract user est déjà un modèle avec des champs prédéfinis"""
    pass