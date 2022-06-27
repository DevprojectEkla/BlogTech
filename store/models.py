from django.db import models

# Create your models here.
from django.urls import reverse
from django.utils import timezone

from Blog.settings import AUTH_USER_MODEL

'''
product
- Nom
- Prix
- Quantité en Stock
- Description
- Image

'''

class Product(models.Model):
    name = models.CharField(max_length=128)
    slug = models.SlugField(max_length=128)
    price = models.FloatField(default=0.0)
    stock = models.IntegerField(default=0)
    description = models.TextField(blank=True) # blank = True pour permettre à l'admin de ne pas entrer de description
    thumbnail = models.ImageField(upload_to="products", blank=True, null=True) # il faut spécifier null True dans le
    # cas d'une image pour indiquer que l'élément peut être vide dans la base de donnée.py
    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("product", kwargs={"slug":self.slug})

# Article (Order)
"""
- Utilisateur
- Produit
- Quantité
- Commandé ou non
"""

class Order(models.Model):
    user = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    ordered = models.BooleanField(default=False)
    ordered_date = models.DateTimeField(blank=True, null=True)
    def __str__(self):
        return f"{self.product.name} ({self.quantity})"
# Panier (Cart)

class Cart(models.Model):
    user = models.OneToOneField(AUTH_USER_MODEL, on_delete=models.CASCADE) # one to one pour limiter la création à un seul panier
    orders = models.ManyToManyField(Order)

    def __str__(self):
        return f"panier de {self.user.username}"

    def delete(self, *args, **kwargs):
        for order in self.orders.all():
            order.ordered = True
            order.ordered_date = timezone.now()
            order.save()
        self.orders.clear()
        super().delete(*args, **kwargs)
"""
- Utilisateur
- Articles
- Commandé ou non
- Date de la commande
"""
