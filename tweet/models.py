from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Tweet(models.Model):
    mensaje = models.TextField(max_length=500)
    timestamp = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User)


    class Meta:
        ordering = ['-timestamp']