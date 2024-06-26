# Generated by Django 5.0.6 on 2024-05-28 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128)),
                ('status', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('mobile_number', models.CharField(max_length=15)),
                ('address', models.TextField()),
                ('designation', models.CharField(max_length=100)),
                ('hired_on', models.DateField(blank=True, null=True)),
                ('days_employed', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]
