# Generated by Django 4.0.5 on 2022-07-30 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0007_rename_highligted_text_homepage_highlighted_text_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='first_link',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='homepage',
            name='second_link',
            field=models.TextField(blank=True),
        ),
    ]
