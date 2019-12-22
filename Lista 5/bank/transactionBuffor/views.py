from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.db.models import Q
from django.utils import timezone 
from django.contrib.auth.decorators import login_required
from transactions.models import Transaction, Client


@login_required
def transaction_buffor(request):

    if request.user.is_superuser:
        if request.method == 'POST':
            reciver = request.POST.get('do','')
            sender = request.POST.get('od','')
            amount = request.POST.get('ile','')
            context = {
                'rec' : reciver,
                'sen' : sender,
                'amo' :  amount,
            }
            
            db_sender = Client.objects.get(account_number=sender)
            db_reciver = Client.objects.get(account_number = reciver)
            transaction = Transaction.objects.get(value = amount, by= db_sender, to=db_reciver)
            transaction.accepted = True;
            transaction.save();       
            # return render(request, 'test.html', context)


        transactions_to_accept = Transaction.objects.filter(accepted = False).order_by('-date')
        transactions_accepted =  Transaction.objects.filter(accepted = True).order_by('-date')
        balance = request.user.client.balance
        context = {
            'transactions_to_accept' : transactions_to_accept ,
            'transactions_accepted' : transactions_accepted,
            'balance' : balance,
        }
        return render(request, 'transaction_buffor.html', context)
    else:  
        return redirect('transaction_history')

@login_required
def transaction_accept(request, trans_id):

    transaction = Transaction.objects.get(id=trans_id)

    context = {
        'reciver' : transaction.to,
        'sender' : transaction.by,
        'ammount' : transaction.value,
    }    
    return render(request, 'transaction_accept.html', context) 