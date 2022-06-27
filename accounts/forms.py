from django.forms import ModelForm
from django import forms
from .models import BlogVisitor


class SignupForm(ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = BlogVisitor
        fields = ['last_name','first_name','email','username','password']
