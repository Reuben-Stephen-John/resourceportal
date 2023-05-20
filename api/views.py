from rest_framework import generics,permissions
from courses.models import Course,Module
from .serializers import CourseSerializer,ModuleSerializer,CourseModuleSerializer
from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

class CourseSearchAPIView(APIView):
    def get(self, request):
        query = request.query_params.get('search', '')
        courses = Course.objects.filter(
            Q(course_lookup__icontains=query)
        )[:10]
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data)



# Create your views here.
class CourseList(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ModuleList(generics.ListAPIView):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class CourseModule(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseModuleSerializer
    lookup_field = 'pk'




