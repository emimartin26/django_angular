from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from django.views.generic import TemplateView
from tweet.views import TweetViewSet

## si trailing_slash  es true cuando entre a  www.webpage.com/api
## django me redirecciona a www.webpage.com/api/ , es decir le agrega "/"

router = DefaultRouter(trailing_slash=False)
router.register(r'tweets', TweetViewSet)

urlpatterns = patterns('',
    url(r'^api-token-auth/', 'rest_framework_jwt.views.obtain_jwt_token'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/',include(router.urls)),
    url(r'^$',TemplateView.as_view(template_name='index.html')),
)
