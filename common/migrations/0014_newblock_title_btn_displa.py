# Generated by Django 4.0.5 on 2022-09-27 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0013_newblock_video_tile'),
    ]

    operations = [
        migrations.AddField(
            model_name='newblock',
            name='title_btn_displa',
            field=models.CharField(default='ouvrir la video de présentation', max_length=128),
            preserve_default=False,
        ),
    ]