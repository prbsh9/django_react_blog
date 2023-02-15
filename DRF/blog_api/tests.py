from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from blog.models import Post, Category
from django.contrib.auth.models import User

# Create your tests here.
# We will test whether we can view and create posts.


class TestPosts(APITestCase):

    def test_view_post(self):
        url = reverse("blog_api:list")
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_creating_post(self):
        url = reverse("blog_api:list")
        self.category1 = Category.objects.create(name='django')

        self.test_user = User.objects.create(
            username='test_user', password='password123')
        test_post_data = {'title': 'New Post', 'content': 'Content',
                          'author': 1, 'category': 1, 'excerpt': 'New'}
        response = self.client.post(url, test_post_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Is created posts being viewed correctly?
        url_pk = reverse("blog_api:detail", kwargs={'pk': '1'})
        response = self.client.get(url_pk, format='json')
        print(response)
        self.assertEqual(response.data['title'], 'New Post')  # type: ignore
        self.assertEqual(response.data['content'], "Content")  # type: ignore
        self.assertEqual(response.data['author'],   # type: ignore
                         self.test_user.pk)
        self.assertEqual(response.data['excerpt'], 'New')  # type: ignore
