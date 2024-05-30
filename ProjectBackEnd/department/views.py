from django.shortcuts import render
from rest_framework import status

from .models import Department
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import DepartmentSerializer


# Create your views here.
# i should modify them to specify uniqueness of department in delete update list one dept

@api_view(["GET"])
def listAllDeps(request):
    data = Department.objects.all()
    datajson = DepartmentSerializer(data, many=True)
    return Response({"message": datajson.data})


@api_view(["GET"])
def get_dep(request, id):
    try:
        data = Department.objects.get(id=id)
        if data:
            datajson = DepartmentSerializer(data, many=False)
            return Response({"message": datajson.data})
    except Department.DoesNotExist:
        return Response({"message": "Department not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(["DELETE"])
def delete_dep(request, id):
    try:
        department = Department.objects.get(id=id)
        department.delete()
        return Response({"message": "Department deleted successfully"})
    except Department.DoesNotExist:
        return Response({"message": "Department not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(["PUT"])
def edit_dep(request, id):
    try:
        dep = Department.objects.get(id=id)
        serializer = DepartmentSerializer(dep, data=request.data)
        # print('first')
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Department updated successfully"})
            # print('second')
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except Department.DoesNotExist:
        # print('third')
        return Response({"message": "Department not found"}, status=status.HTTP_404_NOT_FOUND)
