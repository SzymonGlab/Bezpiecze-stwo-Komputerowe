# Generated by Django 2.2.7 on 2019-11-24 15:33

from django.db import migrations, models
import transactions.models


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0012_auto_20191124_1519'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='account_number',
            field=models.CharField(default='4554321028', editable=False, max_length=10, validators=[transactions.models.validate_account_number]),
        ),
    ]