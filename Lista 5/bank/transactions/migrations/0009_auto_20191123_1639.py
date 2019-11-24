# Generated by Django 2.2.7 on 2019-11-23 16:39

from django.db import migrations, models
import transactions.models


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0008_auto_20191123_1637'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='account_number',
            field=models.CharField(default='8219065844', editable=False, max_length=10, validators=[transactions.models.validate_account_number]),
        ),
    ]
