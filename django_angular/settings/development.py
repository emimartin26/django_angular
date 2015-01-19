__author__ = 'emiliano'

import os
from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '6$=fh$#3%o07!4-pybwwdk#(t*6$g^pn6lgflp*3)$(%e*#(m_'



# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

DEBUG = True

TEMPLATE_DEBUG = DEBUG

ALLOWED_HOSTS = []


##################################################################
# Installed apps
##################################################################

DEVELOPMENT_APPS = (
    'debug_toolbar',
)

INSTALLED_APPS = EXTERNAL_APPS + DEVELOPMENT_APPS + INTERNAL_APPS



#############################################################################
# Django Pipeline
#############################################################################

STATICFILES_STORAGE = 'pipeline.storage.PipelineCachedStorage'

PIPELINE_CSS_COMPRESSOR = 'pipeline.compressors.yuglify.YuglifyCompressor'

PIPELINE_JS_COMPRESSOR = 'pipeline.compressors.uglifyjs.UglifyJSCompressor'

# CSS Files.
PIPELINE_CSS = {
    # Project libraries.
    'styles': {
        'source_filenames': (
            'bower_components/bootstrap/dist/css/bootstrap.css',
        ),
        # Compress passed libraries and have
        # the output in`css/libs.min.css`.
        'output_filename': 'css/libs.min.css',
    }
    # ...
}
# JavaScript files.
PIPELINE_JS = {
    # Project JavaScript libraries.
    'libraries': {
        'source_filenames': (
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-cookies/angular-cookies.js',
            'app/example/module.js',
            'app/example/controller.js',
            'app/example/routes.js',
            'app/tweet/module.js',
            'app/tweet/service.js',
            'app/tweet/controller.js',
            'app/tweet/routes.js',
            'app/aplication.js',

        ),
        # Compress all passed files into `js/libs.min.js`.
        'output_filename': 'js/libs.min.js',
    },
    # ...
}