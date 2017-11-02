import datetime
from django.test import TestCase
from django.utils import timezone
from polls.storage import models
from polls import business_logic

class TestQuestion(TestCase):
    def setUp(self):
        multilingual_question = models.Question()
        multilingual_question.pub_date = timezone.now()
        multilingual_question.question_text = "Bar"

        multilingual_question.set_current_language('fr')
        multilingual_question.localized_name = "Foo en français"
        multilingual_question.set_current_language('en')
        multilingual_question.localized_name = "Foo in English"
        multilingual_question.save()

        self.pk = multilingual_question.id

    def test_was_published_recently_with_future_question(self):
        time = timezone.now() + datetime.timedelta(days=30)
        future_question = models.Question(pub_date=time)
        self.assertIs(business_logic.was_published_recently(future_question), False)

    def test_was_published_recently_with_old_question(self):
        time = timezone.now() - datetime.timedelta(days=1, seconds=1)
        old_question = models.Question(pub_date=time)
        self.assertIs(business_logic.was_published_recently(old_question), False)

    def test_was_published_recently_with_recent_question(self):
        time = timezone.now() - datetime.timedelta(hours=23, minutes=59, seconds=59)
        recent_question = models.Question(pub_date=time)
        self.assertIs(business_logic.was_published_recently(recent_question), True)

    def test_can_get_text_in_supported_language(self):
        question = models.Question.objects.get(pk=self.pk)

        question.set_current_language('fr')
        self.assertEqual(question.get_current_language(), 'fr')
        self.assertEqual(question.localized_name, 'Foo en français')

    def test_can_get_text_in_other_supported_language(self):
        question = models.Question.objects.get(pk=self.pk)

        question.set_current_language('en')
        self.assertEqual(question.get_current_language(), 'en')
        self.assertEqual(question.localized_name, 'Foo in English')

    def test_non_translated_language_falls_back(self):
        question = models.Question.objects.get(pk=self.pk)

        question.set_current_language('nl')
        self.assertEqual(question.get_current_language(), 'nl')
        self.assertEqual(question.localized_name, 'Foo in English')

    def test_non_supported_language_falls_back(self):
        question = models.Question.objects.get(pk=self.pk)

        question.set_current_language('dk')
        self.assertEqual(question.get_current_language(), 'dk')
        self.assertEqual(question.localized_name, 'Foo in English')

    def test_can_change_localized_name(self):
        question = models.Question.objects.get(pk=self.pk)
        question.set_current_language('fr')
        question.localized_name = "用中文说"
        question.save()

        question_db = models.Question.objects.get(pk=self.pk)
        question_db.set_current_language('fr')
        self.assertEqual(question_db.localized_name, '用中文说')
