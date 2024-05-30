from rest_framework import serializers
from .models import *
from userAccount.serializers import UserAccountSerializer

# from userAccount.models import UserAccount



# from ..userAccount.serializers import UserAccountSerializer


class EmployeeSerializer(serializers.ModelSerializer):
    user_account = UserAccountSerializer()

    class Meta:
        model = Employee
        fields = "__all__"



    # def validate_user_account(self, value):
    #     user_account_id = self.instance.user_account.id if self.instance and self.instance.user_account else None
    #     if user_account_id:
    #         # Ensure the same UserAccount ID is not assigned to another employee
    #         if Employee.objects.filter(user_account_id=user_account_id).exclude(id=self.instance.id).exists():
    #             raise serializers.ValidationError('This UserAccount is already associated with another Employee.')
    #     else:
    #         if Employee.objects.filter(user_account=value).exists():
    #             raise serializers.ValidationError('This UserAccount is already associated with another Employee.')
    #     return value

    # def update(self, instance, validated_data):
    #     # Handle nested user_account data
    #     user_account_data = validated_data.pop('user_account', None)
    #     if user_account_data:
    #         user_account = instance.user_account
    #         username = user_account_data.get('username', user_account.username)
    #         email = user_account_data.get('email', user_account.email)
    #
    #         # Check if the provided username and email are the same as the current ones
    #         if username != user_account.username:
    #             # Check if the new username already exists
    #             if UserAccount.objects.exclude(id=user_account.id).filter(username=username).exists():
    #                 raise serializers.ValidationError(
    #                     {'user_account': {'username': 'user with this username already exists.'}}
    #                 )
    #
    #         if email != user_account.email:
    #             # Check if the new email already exists
    #             if UserAccount.objects.exclude(id=user_account.id).filter(email=email).exists():
    #                 raise serializers.ValidationError(
    #                     {'user_account': {'email': 'user with this email already exists.'}}
    #                 )
    #
    #         # Update the user_account instance
    #         for attr, value in user_account_data.items():
    #             setattr(user_account, attr, value)
    #         user_account.save()
    #
    #     # Update the employee instance
    #     for attr, value in validated_data.items():
    #         setattr(instance, attr, value)
    #     instance.save()
    #     return instance
