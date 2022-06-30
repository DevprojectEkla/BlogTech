from django.forms import ModelForm
from django import forms

from articles.models import Article


class PostForm(ModelForm):

    class Meta:
        model = Article
        fields = '__all__'


class EditForm(ModelForm):

    class Meta:
        model = Article
        fields = '__all__'




