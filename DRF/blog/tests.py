from django.test import TestCase
from django.contrib.auth.models import User
from blog.models import Post, Category


# Create your tests here.
class Test_Create_Post(TestCase):

    @classmethod
    def setUpTestData(cls):
        test_caregory = Category.objects.create(name='python')
        test_user1 = User.objects.create(
            username='test_user1', password='password1')
        test_post = Post.objects.create(title='New Post', excerpt='1', content='Content:',
                                        slug='new-post', status='published', category_id=1, author_id=1)

    def test_post_content(self):
        category = Category.objects.get(id=1)
        post = Post.objects.get(id=1)
        user = User.objects.get(id=1)
        self.assertEqual(post.title, 'New Post')
        self.assertEqual(post.excerpt, '1')
        self.assertEqual(post.content, 'Content:')
        self.assertEqual(post.slug, 'new-post')
        self.assertEqual(post.status, 'published')
        self.assertEqual(post.author, user)
        self.assertEqual(post.author.username, 'test_user1')

        self.assertEqual(str(category), 'python')
        self.assertEqual(str(post), 'New Post')
