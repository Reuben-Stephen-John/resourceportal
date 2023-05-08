import uuid
from django.db import models
from django.contrib.auth.models import User
from .choices import *
# Create your models here.
class Course(models.Model):
    course_code=models.CharField(max_length=10)
    course_title=models.CharField(max_length=100)
    school=models.CharField(max_length=100,choices=CHOICE_SCHOOL)
    credits_no=models.IntegerField()

class Module(models.Model):
    course=models.ForeignKey(Course,on_delete=models.CASCADE)
    module_name=models.CharField(max_length=100)
    module_no=models.IntegerField()
    topics=models.CharField(max_length=500)
    links=models.URLField()
    notes=models.URLField()
