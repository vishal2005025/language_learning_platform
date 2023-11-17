from django.db import models

# Create your models here.
class student(models.Model):
    UserNames = models.CharField(max_length=100, default='student')
    emails = models.CharField(max_length=100, default='abcd') 

