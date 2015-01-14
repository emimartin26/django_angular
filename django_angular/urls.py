from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from api.views import TweetViewSet


router = DefaultRouter()
router.register(r'tweets', TweetViewSet)

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'django_angular.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/',include(router.urls)),
)
