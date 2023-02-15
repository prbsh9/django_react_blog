from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, default=2)  # type: ignore
    title = models.CharField(max_length=100)
    excerpt = models.TextField(null=True, blank=True)
    content = models.TextField()
    slug = models.SlugField(max_length=250, unique_for_date='published')
    published = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='blog_posts')
    status = models.CharField(max_length=10, choices=(
        ('draft', 'Draft'), ('published', 'Published')), default='published')
    objects = models.Manager()  # The default manager.
    postobjects = PostObjects()  # Our custom manager.

    class Meta:
        ordering = ('-published',)  # -published means descending order

    def __str__(self):
        return self.title
