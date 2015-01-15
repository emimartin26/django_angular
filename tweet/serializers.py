from rest_framework.serializers import ModelSerializer, SlugRelatedField
from tweet.models import Tweet


class TweetSerializer(ModelSerializer):
    user = SlugRelatedField(read_only=True,slug_field='username')

    class Meta:
        model = Tweet