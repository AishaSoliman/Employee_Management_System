from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import status

from .models import Company
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CompanySerializer


# Create your views here.
# it should be unique by id only i wouldn't need anything

@api_view(["GET"])
def listAllCompanies(request):
    data = Company.objects.all()
    datajson = CompanySerializer(data, many=True)
    return Response({"message": datajson.data})


@api_view(["GET"])
def get_company(request, id):
    try:
        data = Company.objects.get(id=id)
        if data:
            datajson = CompanySerializer(data, many=False)
            return Response({"message": datajson.data})
    except Company.DoesNotExist:
        return Response({"message": "Company not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(["DELETE"])
def delete_company(request, id):
    try:
        company = Company.objects.get(id=id)
        company.delete()
        return Response({"message": "Company deleted successfully"})
    except Company.DoesNotExist:
        return Response({"message": "Company not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(["PUT"])
def edit_company(request, id):
    try:
        company = Company.objects.get(id=id)
        serializer = CompanySerializer(company, data=request.data)
        # print('first')
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Company updated successfully"})
            # print('second')
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except Company.DoesNotExist:
        # print('third')
        return Response({"message": "Company not found"}, status=status.HTTP_404_NOT_FOUND)
