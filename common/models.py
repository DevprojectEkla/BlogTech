from django.db import models

# Create your models here.

# Je voulais créer un texte de présentation et le stocker dans la bdd. Peut-être pas une bonne idée finalement.
# class Presentation(models.Model):
#     auteur = models.CharField(max_length=100)
#     title = models.CharField(max_length=255)
#     text = models.TextField(blank=True)
#     date = models.DateTimeField('date de publication')
#
#     def __str__(self):
#         return f"Titre:{self.title}, date:{self.date}"


class HomePage(models.Model):

    name = models.CharField(max_length=255)
    main_title = models.CharField(max_length=255)
    main_img_source = models.CharField(max_length=255, blank=True)
    main_img_legend = models.CharField(max_length=255, blank=True)
    carousel_name = models.CharField(max_length=255, blank=True)
    first_title_h3 = models.CharField(max_length=255, blank=True)
    first_p = models.TextField(blank=True)
    second_img_source = models.CharField(max_length=255, blank=True)
    second_img_alt = models.CharField(max_length=255, blank=True)
    preview_text = models.CharField(max_length=255, blank=True)


class Block(models.Model):
    id = models.IntegerField(default=1, primary_key=True)
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    paragraph = models.TextField(blank=True)
    link1 = models.TextField(blank=True)
    link2 = models.TextField(blank=True)
    link3 = models.TextField(blank=True)
    image = models.CharField(max_length=255, blank=True)
