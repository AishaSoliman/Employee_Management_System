from django.contrib import admin

from .models import Employee

# Register your models here.
admin.site.register(Employee)
admin.site.site_title = 'Employee Management System'
# admin.site.site_header = 'Employee Management System'
