import logging
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.utils import timezone
from django.views import generic
from rest_framework.decorators import api_view
from rest_framework.response import Response
from polls import business_logic, models, repositories

LOGGER = logging.getLogger(__name__)

# pylint: disable=too-many-ancestors
class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
        return models.Question.objects.filter(pub_date__lte=timezone.now()). \
            order_by('-pub_date')[:5]

# pylint: disable=too-many-ancestors
class DetailView(generic.DetailView):
    model = models.Question
    template_name = 'polls/detail.html'

    def get_queryset(self):
        return models.Question.objects.filter(pub_date__lte=timezone.now())

# pylint: disable=too-many-ancestors
class ResultsView(generic.DetailView):
    model = models.Question
    template_name = 'polls/results.html'

def vote_from_form(request, question_id):
    choice_id = request.POST['choice']
    LOGGER.info("Handling vote call on question id %s and choice id %s", question_id, choice_id)
    controller = business_logic.VoteController(repositories.ChoiceRepository())
    controller.increment_vote_count_on_choice(question_id, choice_id)
    return HttpResponseRedirect(reverse('polls:results', args=(question_id)))

@api_view(http_method_names=['POST'])
def vote_from_api(_, **kwargs):
    question_id = kwargs['question_id']
    choice_id = kwargs['choice_id']
    controller = business_logic.VoteController(repositories.ChoiceRepository())
    choice = controller.increment_vote_count_on_choice(question_id, choice_id)
    return Response(choice)
