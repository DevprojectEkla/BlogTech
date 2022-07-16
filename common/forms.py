from urllib import request
from django import forms


class ContactForm(forms.Form):
    nom = forms.CharField(max_length=255)
    objet = forms.CharField(max_length=255)
    email = forms.EmailField()
    Message = forms.CharField(widget=forms.Textarea)