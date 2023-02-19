from django.urls import path
from .views import PostList, PostDetail, LogoutView, RegisterUserView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

app_name = 'blog_api'

# /api will come here
urlpatterns = [
    path('<int:pk>/', PostDetail.as_view(), name='detail'),
    path('', PostList.as_view(), name='list'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('register/', RegisterUserView.as_view(), name='register_user'),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),


]
