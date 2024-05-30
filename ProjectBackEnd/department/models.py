from django.db import models

# from userAccount.models import UserAccount


# Create your models here.
class Department(models.Model):
   
    name = models.CharField(max_length=100)
    company = models.ForeignKey('userAccount.UserAccount', null=True, on_delete=models.CASCADE, related_name='company_departments')
    manager = models.ForeignKey('userAccount.UserAccount', null=True, on_delete=models.SET_NULL, related_name='manager_departments') # i want to ensure that the manager is actually manager >> has a userType manager
    # def get_number_of_employees(self):
    #     return self.employee_set.count()

    def __str__(self):
        return self.name
