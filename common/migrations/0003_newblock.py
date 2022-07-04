# Generated by Django 4.0.5 on 2022-07-04 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0002_homepage_delete_presentation'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewBlock',
            fields=[
                ('id', models.IntegerField(default=1, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('title', models.CharField(max_length=255)),
                ('paragraph', models.TextField(blank=True)),
                ('link1', models.TextField(blank=True)),
                ('link2', models.TextField(blank=True)),
                ('link3', models.TextField(blank=True)),
                ('image', models.CharField(blank=True, max_length=255)),
            ],
        ),
    ]