from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Transaction, Client
from django.db.models import Q
from .forms import TransactionForm
from django.utils import timezone 
from django.contrib.auth.decorators import login_required

@login_required
def new_transaction(request):
    if request.method == "POST":
        form = TransactionForm(request.POST)
        if form.is_valid():
            return render(request, 'transaction_check.html', {'form': form.cleaned_data})
    else:
        form = TransactionForm()
    return render(request, 'new_transaction.html', {'form': form})
    
@login_required
def transaction_history(request):
    received = Transaction.objects.filter(to = request.user.client)
    paid =  Transaction.objects.filter(by = request.user.client)
    balance = request.user.client.balance
    context = {
        'transactions_recived' : received,
        'transactions_paid' : paid,
        'balance' : balance,
    }
    return render(request, 'transaction_history.html', context)

@login_required
def transaction_confirmation(request):
    context = {
        'last_transaction' : Transaction.objects.filter(Q(by = request.user.client)).last()
    }
    return render(request,'transaction_confirmation.html', context)

@login_required
def transaction_check(request):
    if request.method == 'POST':
        reciver = request.POST.get('to')
        amount = request.POST.get('value')
        client = Client.objects.filter(account_number = reciver).first()
        transaction = Transaction.objects.create(by=request.user.client, date=timezone.now(), to = client, value = amount)
        transaction.save();
        return redirect('transaction_confirmation')
    else:
        return render(request, 'transaction_check.html', {'form': form}) 


def redirect_to_login(request):
    return redirect('login')