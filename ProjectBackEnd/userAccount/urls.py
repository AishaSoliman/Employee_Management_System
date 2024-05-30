from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.listAllUserAccount, name='userAccounts'),
    path('<str:id>', views.get_userAccount, name='userAccount'),
    path('create', views.create_userAccount, name='createUserAccount'),
    # path('<str:name>/delete', views.delete_emp, name='deleteEmployee'), 
    path('<str:id>/edit', views.editUserAccount, name='editUserAccount'),

]
