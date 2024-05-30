from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.listAllEmployees, name='employees'),
    path('create', views.create_emp, name='createEmployee'),
    path('<str:id>', views.get_emp, name='employee'),
    path('<str:id>/delete', views.delete_emp, name='deleteEmployee'),
    path('<str:id>/edit', views.edit_emp, name='editEmployee'),
    path('count_employees_in_dept/<int:department_id>/', views.count_emp_in_dept, name='count_employees_in_department'),
    path('count_employees_in_company/<int:company_id>/', views.count_emp_in_company, name='count_emp_in_company'),

]
