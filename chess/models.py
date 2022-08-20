from django.db import models

# Create your models here.
class ChessGame(models.Model):
    opponent1 = models.CharField(max_length=255, blank=True, default='Ekla')
    opponent2 = models.CharField(max_length=255,blank=True)
    opening = models.CharField(max_length=255, blank=True)
    date = models.DateField('partie disputée le:')
    PNG = models.FileField(upload_to='chess/chessgames',blank=True, null= True)
    iframe_link = models.URLField(blank=True)
    slug = models.SlugField(max_length=128)


    def __str__(self):
        return (f"ChessGame:{self.slug}, {self.opponent1}vs{self.opponent2},"
        f"le:{self.date}")
    
    class Meta:
        ordering = ['-date']