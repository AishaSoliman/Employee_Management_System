from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.db import transaction
from .models import UserAccount
from .serializers import UserAccountSerializer
# Create your views here.
# maybe the admin will have the access to modify and delete any useraccount

# i will figure out what to write here after connect it with employee

@api_view(["GET"])
def listAllUserAccount(request):
    data = UserAccount.objects.all()
    datajson = UserAccountSerializer(data, many=True)
    return Response({"message": datajson.data})


@api_view(["GET"])
def get_userAccount(request, id):
    data = UserAccount.objects.filter(id=id).first()
    if data:
        datajson = UserAccountSerializer(data, many=False)
        return Response({"message": datajson.data})
    return Response({"message": "employee not found"})


@api_view(["POST"])
def create_userAccount(request):
    serializer = UserAccountSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(["PUT"])
def editUserAccount(request, id):
    try:
        user_account = UserAccount.objects.get(id=id)
        data = request.data

        with transaction.atomic():
            serializer = UserAccountSerializer(user_account, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "UserAccount updated successfully"})
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except UserAccount.DoesNotExist:
        return Response({"message": "UserAccount not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"message": f"An error occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)