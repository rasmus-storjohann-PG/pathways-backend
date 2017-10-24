import logging
from polls.storage import models

LOGGER = logging.getLogger(__name__)

class ChoiceRepository:
    @staticmethod
    def get_choice_by_question_id_and_choice_id(question_id, choice_id):
        LOGGER.info('Getting choice by question id %s and choice id %s', question_id, choice_id)
        question = models.Question.objects.get(pk=question_id)
        return question.choices.get(pk=choice_id)

    @staticmethod
    def save_choice(choice):
        LOGGER.info('Saving choice')
        choice.save()
