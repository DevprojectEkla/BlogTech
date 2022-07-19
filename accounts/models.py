from django.contrib.auth.models import AbstractUser


class BlogVisitor(AbstractUser):
    """ la classe Abstract user est déjà un modèle avec des champs prédéfinis"""
    pass