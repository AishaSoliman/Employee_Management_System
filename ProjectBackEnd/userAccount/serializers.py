from rest_framework import serializers
from .models import *


class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = "__all__"

    # def validate_username(self, value):
    #     user_account = self.instance
    #     if UserAccount.objects.exclude(id=user_account.id).filter(username=value).exists():
    #         raise serializers.ValidationError("user with this username already exists.")
    #     return value
    #
    # def validate_email(self, value):
    #     user_account = self.instance
    #     if UserAccount.objects.exclude(id=user_account.id).filter(email=value).exists():
    #         raise serializers.ValidationError("user with this email already exists.")
    #     return value
