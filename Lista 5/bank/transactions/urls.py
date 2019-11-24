from django.urls import path
from . import views

urlpatterns = [
    path('transaction_new/', views.new_transaction, name='new_transaction'),
    path('transaction_new/check', views.transaction_check, name='transaction_check'),
    path('transaction_history/', views.transaction_history, name='transaction_history'),
    path('', views.redirect_to_login, name='redirect_login'),
    path('transaction_confirmation/', views.transaction_confirmation, name='transaction_confirmation'),
]
