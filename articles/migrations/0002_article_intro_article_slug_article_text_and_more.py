# Generated by Django 4.0.5 on 2022-06-23 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='intro',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='article',
            name='slug',
            field=models.SlugField(default=1, max_length=128),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='article',
            name='text',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='media'),
        ),
    ]
