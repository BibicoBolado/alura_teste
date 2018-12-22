from django.urls import path
from .import views

app_name = "password"
urlpatterns = [
	path('',views.senha,name='senha'),
]