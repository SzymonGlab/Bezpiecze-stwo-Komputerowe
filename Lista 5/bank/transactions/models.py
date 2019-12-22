from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
import random

def validate_account_number(value):
    if value.len != 10:
        raise ValidationError(
            _('%(value)s is not 10 digits long!'),
            params={'value': value},
        )


class Client(models.Model):
    account_number = random.randint(1000000000,9999999999)
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    account_number = models.CharField(validators=[validate_account_number], max_length=10, default=str(account_number),editable=False)
    balance = models.IntegerField(default=0)

    def __str__(self):
        return  "%s" % (self.account_number)


@receiver(post_save, sender=User)
def create_new_client(sender, instance, created, **kwargs):
    if created:
        Client.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_account(sender, instance, **kwargs):
    instance.client.save()

class Transaction(models.Model):
    by = models.ForeignKey(Client, on_delete=models.CASCADE, related_name="by_client")
    to = models.ForeignKey(Client, on_delete=models.CASCADE, related_name="to_client")
    value = models.PositiveIntegerField()
    date = models.DateTimeField(auto_now=True)
    accepted = models.BooleanField(default=False)
    
    def __str__(self):
        return  "%s -> %s: %d zł" % (self.by, self.to, self.value)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.by.balance = self.by.balance - int(self.value)*0.5
        self.to.balance = self.to.balance + int(self.value)*0.5
        self.by.save()
        self.to.save()
    