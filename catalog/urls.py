from . import views
from django.urls import path
urlpatterns =[
    path('catalog/', views.index),
    path('cart/',views.cart),
    path('catalog/<int:product_id>',views.product)
]