from django.urls import path
from . import views

urlpatterns =[
    path('courses', views.CourseList.as_view()),
    path('courses/', views.CourseSearchAPIView.as_view(), name='course_search'),
    path('courses/<int:pk>', views.CourseModule.as_view()),

]