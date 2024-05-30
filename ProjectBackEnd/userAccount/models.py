from django.contrib.auth.models import AbstractUser
from django.db import models
from rest_framework import serializers

from department.models import Department

# Create your models here.
# the user account here will have email address as loginID username and role
# all of these fields are in employee field as email, username,usertype
# CHOICES = [
#         ('Employee', 'employee'),
#         ('Manager', 'manager'),
#     ]

CHOICES = [
        ('Employee', 'employee'),
        ('Manager', 'manager'),
    ]


class UserAccount(AbstractUser):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(max_length=100,unique=True)
    userType = models.CharField(max_length=100, choices=CHOICES)
    password = models.CharField(max_length=128)
    manager_manages_dep = models.ForeignKey(Department, null=True, on_delete=models.SET_NULL)
    # def validate_username(self, value):
    #     # Check if username is being updated
    #     if self.instance and self.instance.username == value:
    #         return value
    #     # Otherwise, validate as unique
    #     if UserAccount.objects.filter(username=value).exists():
    #         raise serializers.ValidationError("User with this username already exists.")
    #     return value
    #
    # def validate_email(self, value):
    #     # Check if email is being updated
    #     if self.instance and self.instance.email == value:
    #         return value
    #     # Otherwise, validate as unique
    #     if UserAccount.objects.filter(email=value).exists():
    #         raise serializers.ValidationError("User with this email already exists.")
    #     return value

