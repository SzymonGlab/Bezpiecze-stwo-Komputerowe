# Generated by Django 2.2.7 on 2019-11-23 12:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='transaction',
            name='title',
        ),
    ]
