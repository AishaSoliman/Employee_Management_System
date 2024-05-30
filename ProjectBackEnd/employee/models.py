from django.contrib.auth.models import AbstractUser
from django.db import models

# from ProjectBackEnd.userAccount.models import UserAccount


# employee will be identified according to company name and department name and id (id is implemented)

# Create your models here.

class Employee(models.Model):

    company = models.ForeignKey('company.Company', on_delete=models.CASCADE,null=True)
    department = models.ForeignKey('department.Department', on_delete=models.CASCADE, null=True)
    # username i want to link it to the user account
    # {{username = models.CharField(max_length=150, unique=True)
    # email = models.EmailField(unique=True)
    # userType = models.CharField(max_length=100, choices=CHOICES)}}
    # my final approach will be that there will be user_account attribute that link employee with user acoount model that each employee has single user account (it works but i should make the id's matches )
    user_account = models.OneToOneField('userAccount.UserAccount', on_delete=models.CASCADE, related_name='employee', null=True, unique=True)
    status = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    mobile_number = models.CharField(max_length=15)
    address = models.TextField()
    designation = models.CharField(max_length=100)
    hired_on = models.DateField(blank=True, null=True)
    days_employed = models.IntegerField(blank=True, null=True)


    def __str__(self):
        return self.name

