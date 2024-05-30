from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.listAllCompanies, name='companies'),
    path('<str:id>', views.get_company, name='company'),
    path('<str:id>/delete', views.delete_company, name='deleteCompany'),
    path('<str:id>/edit', views.edit_company, name='editCompany'),

]
