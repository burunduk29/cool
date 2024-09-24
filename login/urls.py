from django.urls import path
from setuptools.extern import names

from . import views



urlpatterns = [
    path('login/', views.login_view),
    path('register/', views.register_view),
    path('logout/',views.logout_view, name = 'logout')
]
