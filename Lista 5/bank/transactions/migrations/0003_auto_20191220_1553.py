# Generated by Django 2.2.7 on 2019-12-20 15:53

from django.db import migrations, models
import transactions.models


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0002_auto_20191220_1552'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='accepted',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='client',
            name='account_number',
            field=models.CharField(default='6213852808', editable=False, max_length=10, validators=[transactions.models.validate_account_number]),
        ),
    ]
