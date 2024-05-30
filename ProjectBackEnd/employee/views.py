from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Employee
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import EmployeeSerializer
from userAccount.serializers import UserAccountSerializer
from rest_framework import serializers

from userAccount.models import UserAccount

from company.models import Company
from department.models import Department


# Create your views here.


@api_view(["GET"])
def listAllEmployees(request):
    data = Employee.objects.all()
    datajson = EmployeeSerializer(data, many=True)
    return Response({"Employees": datajson.data})


@api_view(["GET"])
def get_emp(request, id):
    data = Employee.objects.filter(id=id).first()
    if data:
        datajson = EmployeeSerializer(data, many=False)
        return Response({"employee": datajson.data})
    return Response({"message": "employee not found"})


@api_view(["POST"])
def create_emp(request):
    serializer = EmployeeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["DELETE"])  # for now delete using name
def delete_emp(request, id):
    try:
        employee = Employee.objects.get(id=id)
        employee.delete()
        return Response({"message": "Employee deleted successfully"})
    except Employee.DoesNotExist:
        return Response({"message": "Employee not found"}, status=status.HTTP_404_NOT_FOUND)


@csrf_exempt
@api_view(["PUT"])
def edit_emp(request, id):
    try:
        employee = Employee.objects.get(id=id)
        data = request.data

        # Ensure we do not update the user_account via this serializer
        if 'user_account' in data:
            return Response(
                {"message": "user_account fields should not be included in this request"},
                status=status.HTTP_400_BAD_REQUEST
            )
        if 'company' in data:
            company_id = data['company']
            if not Company.objects.filter(id=company_id).exists():
                return Response(
                    {"message": "Company with the provided ID does not exist"},
                    status=status.HTTP_400_BAD_REQUEST
                )

        if 'department' in data:
            department_id = data['department']
            if not Department.objects.filter(id=department_id).exists():
                return Response(
                    {"message": "Department with the provided ID does not exist"},
                    status=status.HTTP_400_BAD_REQUEST
                )
        serializer = EmployeeSerializer(employee, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Employee updated successfully"})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except Employee.DoesNotExist:
        return Response({"message": "Employee not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"message": f"An error occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def count_emp_in_dept(request, department_id):
    try:
        department = get_object_or_404(Department, id=department_id)
        employee_count = Employee.objects.filter(department=department).count()
        return Response({"employee_count": employee_count}, status=status.HTTP_200_OK)
    except Department.DoesNotExist:
        return Response({"message": "Department not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"message": f"An error occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def count_emp_in_company(request, company_id):
    try:
        company = get_object_or_404(Company, id=company_id)
        employee_count = Employee.objects.filter(company=company).count()
        return Response({"employee_count": employee_count}, status=status.HTTP_200_OK)
    except Department.DoesNotExist:
        return Response({"message": "Company not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"message": f"An error occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

