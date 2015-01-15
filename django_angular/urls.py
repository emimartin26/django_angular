from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework.routers import DefaultRouter
import app
from tweet.views import TweetViewSet


router = DefaultRouter()
router.register(r'tweets', TweetViewSet)

urlpatterns = patterns('',
    url(r'^','app.views.index'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/',include(router.urls)),
)
