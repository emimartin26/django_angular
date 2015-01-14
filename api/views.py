from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ModelViewSet
from api.serializers import TweetSerializer
from tweet.models import Tweet


class TweetViewSet(ModelViewSet):
	serializer_class = TweetSerializer
	queryset = Tweet.objects.all()
	lookup_field = 'id'