# Generated by Django 4.0.5 on 2022-07-30 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0008_homepage_first_link_homepage_second_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='first_link',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='homepage',
            name='second_link',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]