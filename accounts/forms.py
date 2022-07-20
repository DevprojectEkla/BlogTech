from django.forms import ModelForm
from django import forms
from .models import BlogVisitor
from django.contrib.auth.hashers import make_password

class SignupForm(ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = BlogVisitor
        fields = ['last_name','first_name','email','username','password']
        
        # fields['password'] = make_password(fields['password'])
