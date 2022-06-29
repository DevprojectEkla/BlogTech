from django.http import request
from django.shortcuts import render, get_object_or_404
from django.template.defaulttags import url

from django.views.generic import TemplateView

from articles.models import Article


class MainView(TemplateView):
    template_name = 'main.html'
    request = request


def homepage(request):
    # Ce qui suit en commentaire, c'est l'idée si l'on veut récupérer des variables du modèle Article dans cette view
    # mais pour faire ce que je voulais finalement je n'en ai pas eu besoin...
    # article = get_object_or_404(Article,slug=4)
    # slug = article.slug    #
    # context = {"article": article, "slug": slug}
    return render(request, 'common/home.html')  # , context)
