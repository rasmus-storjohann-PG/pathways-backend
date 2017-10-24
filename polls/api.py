from rest_framework import routers
from django.conf.urls import url, include
from polls import viewsets, views

def build_urls_from_view_sets():
    router = routers.DefaultRouter()
    router.register(r'^questions', viewsets.QuestionViewSet)
    router.register(r'^questions/(?P<question_id>[0-9]+)/choices', viewsets.ChoiceViewSet, 'choice')
    return router.urls

VOTE_PATTERN = r'^questions/(?P<question_id>[0-9]+)/choices/(?P<choice_id>[0-9]+)/vote/'

# pylint: disable=invalid-name
urlpatterns = [
    url(r'^', include(build_urls_from_view_sets())),
    url(VOTE_PATTERN, views.vote_from_api)
]
