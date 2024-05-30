from django.db import models


# Create your models here.
class Company(models.Model):

    name = models.CharField(max_length=100)

    # numOfDep =
    # numOfEmp =
    # will figure out later how to link depts and emps and count them
