from django.db import models
from parler.models import TranslatableModel, TranslatedFields
from django.utils.translation import ugettext_lazy as _

class Question(TranslatableModel):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    translations = TranslatedFields(
        localized_name=models.CharField(_("localized_name"), max_length=200)
    )

    def __str__(self):
        return self.question_text


class Choice(models.Model):
    question = models.ForeignKey(Question, related_name='choices', on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
