# Create your views here.
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .permissions import IsOwnerOrReadOnly
from tweet.models import Tweet
from tweet.serializers import TweetSerializer



class TweetViewSet(ModelViewSet):
    serializer_class = TweetSerializer
    queryset = Tweet.objects.all()
    lookup_field = 'id'
    permission_classes = (IsOwnerOrReadOnly,)



    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

