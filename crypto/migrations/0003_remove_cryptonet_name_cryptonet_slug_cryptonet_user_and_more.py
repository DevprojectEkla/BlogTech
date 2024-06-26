# Generated by Django 4.0.5 on 2022-09-19 16:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('crypto', '0002_cryptonet_key'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cryptonet',
            name='name',
        ),
        migrations.AddField(
            model_name='cryptonet',
            name='slug',
            field=models.SlugField(default=1, max_length=128),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='cryptonet',
            name='user',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='cryptonet',
            name='key',
            field=models.CharField(default=b'02yviJA6LBQqkCJDvdHZ_Eb_vhTn7ry8q_AlvTiOXrs=', max_length=255),
        ),
        migrations.AlterField(
            model_name='cryptonet',
            name='message',
            field=models.TextField(max_length=255),
        ),
    ]
