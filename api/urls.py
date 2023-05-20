from django.urls import path
from . import views

urlpatterns =[
    path('courses', views.CourseList.as_view()),
    path('courses/<int:pk>', views.CourseModule.as_view()),
]