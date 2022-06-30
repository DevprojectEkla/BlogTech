from django.http import request
from django.shortcuts import render, get_object_or_404
from django.template.defaulttags import url

from django.views.generic import TemplateView

from articles.models import Article
#from common.models import Presentation


class MainView(TemplateView):
    template_name = 'main.html'
    request = request


def homepage(request):
    # Ce qui suit en commentaire, c'est l'idée si l'on veut récupérer des variables du modèle Article dans cette view
    # mais pour faire ce que je voulais finalement je n'en ai pas eu besoin...
    # article = get_object_or_404(Article,slug=4)
    # slug = article.slug    #
    # context = {"article": article, "slug": slug}
    # les 2 lignes du dessous, j'ai voulu créer un modèle Presentation pour insérer mon texte dans la page home.html
    # pour ne pas surcharger mon fichier .html avec du texte... mais peut-être que cela présente d'autres inconvénients
    # comme pour la mise en forme de ce texte avec des tags html et des styles CSS. Peut-être faudrait-il créer un
    # ou plusieurs modèles de mise en page (titre, paragraphe1, paragraphe2, mot-clé1,mot-clé2,etc. img de § etc.
    # contenu = Presentation.objects.all
    # context = {'contenu': contenu}
    return render(request, 'common/home.html') #  , context)
