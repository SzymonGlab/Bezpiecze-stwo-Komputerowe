# Generated by Django 2.2.7 on 2019-11-23 16:34

from django.db import migrations, models
import transactions.models


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0006_auto_20191123_1629'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='account_number',
            field=models.CharField(default='4551633264', editable=False, max_length=10, validators=[transactions.models.validate_account_number]),
        ),
    ]
