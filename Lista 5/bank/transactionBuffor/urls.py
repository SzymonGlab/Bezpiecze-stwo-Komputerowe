from django.urls import path
from . import views

urlpatterns = [
    path('transaction_buffor/', views.transaction_buffor, name='transaction_buffor'),
    path('transaction_accept/<int:trans_id>', views.transaction_accept, name='transaction_accept'),
]
