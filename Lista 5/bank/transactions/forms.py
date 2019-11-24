from django import forms
from .models import Transaction, Client


class TransactionForm(forms.ModelForm):
    
    to = forms.CharField(max_length=10, label='Numer konta:')
    value = forms.IntegerField(required=True, label='Kwota:')


    class Meta:
        model = Transaction
        fields = ('to', 'value',)

    def clean_to(self):
        data = self.cleaned_data['to']
        try:
            data = Client.objects.get(account_number = data)
        except Client.DoesNotExist:
            data = None
        return data