from django.shortcuts import render
from rest_framework import generics
from blog.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
# Create your views here.


class PostList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data['refresh']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            data = {
                'detail': 'Refresh Token is either invalid, expired or you did not include it.'
            }
            return Response(status=status.HTTP_400_BAD_REQUEST)


class RegisterUserView(APIView):

    def post(self, request):
        try:
            username = request.data['username']
            email = request.data['email']
            password = request.data['password']
            # if username not in User.objects.all()
            user = User.objects.create_user(username, email, password)
            return Response(status=status.HTTP_201_CREATED)
        except Exception as e:
            data = {
                'detail': 'You did not provide email, username and password correctly.',
            }
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST, data=data)
