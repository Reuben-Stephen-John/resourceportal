import uuid
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from .choices import *
# Create your models here.
class Course(models.Model):
    course_code=models.CharField(max_length=10)
    course_title=models.CharField(max_length=100)
    school=models.CharField(max_length=100,choices=CHOICE_SCHOOL)
    credits_no=models.FloatField(validators=[MaxValueValidator(4),MinValueValidator(1)])

class Module(models.Model):
    course=models.ForeignKey(Course,on_delete=models.CASCADE)
    module_name=models.CharField(max_length=100)
    module_no=models.IntegerField(validators=[MaxValueValidator(10), MinValueValidator(1)])
    topics=models.CharField(max_length=500)
    links=models.TextField(null=False)
    notes=models.TextField(null=False)
