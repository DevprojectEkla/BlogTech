# Generated by Django 4.0.5 on 2022-09-27 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0010_alter_newblock_options_newblock_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='newblock',
            name='highlighted_text1',
        ),
        migrations.RemoveField(
            model_name='newblock',
            name='highlighted_text2',
        ),
        migrations.RemoveField(
            model_name='newblock',
            name='highlighted_text3',
        ),
        migrations.RemoveField(
            model_name='newblock',
            name='text_effect1',
        ),
        migrations.RemoveField(
            model_name='newblock',
            name='text_effect12',
        ),
        migrations.RemoveField(
            model_name='newblock',
            name='text_effect13',
        ),
        migrations.RemoveField(
            model_name='newblock',
            name='text_effect2',
        ),
        migrations.RemoveField(
            model_name='newblock',
            name='text_effect21',
        ),
        migrations.RemoveField(
            model_name='newblock',
            name='text_effect23',
        ),
        migrations.RemoveField(
            model_name='newblock',
            name='text_effect3',
        ),
        migrations.RemoveField(
            model_name='newblock',
            name='text_effect32',
        ),
        migrations.RemoveField(
            model_name='newblock',
            name='text_effect33',
        ),
        migrations.AddField(
            model_name='newblock',
            name='video',
            field=models.FileField(blank=True, null=True, upload_to='videos'),
        ),
    ]
