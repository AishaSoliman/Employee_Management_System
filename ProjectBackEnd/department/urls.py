from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.listAllDeps, name='departments'),
    path('<str:id>', views.get_dep, name='department'),
    path('<str:id>/delete', views.delete_dep, name='deleteDepartment'),
    path('<str:id>/edit', views.edit_dep, name='editDepartment'),

]
