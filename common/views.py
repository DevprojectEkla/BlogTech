from django.http import request
from django.shortcuts import render
from django.template.defaulttags import url

from django.views.generic import TemplateView


class MainView(TemplateView):
    template_name = 'main.html'
    request = request

def homepage(request):
    return render(request, 'common/home.html')
