# Generated by Django 5.0.6 on 2024-05-29 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userAccount', '0002_alter_useraccount_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='email',
            field=models.EmailField(max_length=100, unique=True),
        ),
    ]
