from django.conf import settings
from django.db import models

# Create your models here.
from django.urls import reverse

from Blog.settings import AUTH_USER_MODEL


class Article(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date = models.DateTimeField('date de publication')
    slug = models.SlugField(max_length=128)
    # image = models.ImageField(upload_to='media', blank=True, null=True) avec heroku les images uploadée sont suppr
    # à chaque nouvelle session à moins de payer un addon spécifique. Je change donc mon modèle pour que cette variable
    # pointe vers un nom de fichier static directement inclus dans mon application. Ces images-là ne sont pas suppr.
    image = models.CharField(max_length=255, blank=True, null=True)
    intro = models.TextField(blank=True)
    text = models.TextField(blank=True, null=True)
    comments = models.IntegerField(default=0)

    def __str__(self):
        return f"Titre: {self.title}, Auteur:{self.author}"

    def get_absolute_url(self):
        return reverse("article", kwargs={"slug":self.slug})

    class Meta:
        ordering = ['-date']


class Comment(models.Model):
    user = models.ForeignKey(AUTH_USER_MODEL,on_delete=models.CASCADE)
    text = models.TextField()
    article = models.ForeignKey(Article, on_delete=models.CASCADE,null=True)
    date = models.DateTimeField('date de publication du commentaire')

    def __str__(self):
        return f"article:{self.article}, commentaire:{self.text}"

    class Meta:
        ordering = ['-date']



