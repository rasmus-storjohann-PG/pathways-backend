import datetime
import logging
from django.utils import timezone

LOGGER = logging.getLogger(__name__)

class VoteController:
    def __init__(self, choice_repository):
        self.repository = choice_repository

    def increment_vote_count_on_choice(self, question_id, choice_id):
        choice = self.repository.get_choice_by_question_id_and_choice_id(question_id, choice_id)
        choice.votes += 1
        LOGGER.info('Incremented the votes on "%s" to %i', choice.choice_text, choice.votes)
        self.repository.save_choice(choice)
        return choice

def was_published_recently(question):
    now = timezone.now()
    return now - datetime.timedelta(days=1) <= question.pub_date <= now
