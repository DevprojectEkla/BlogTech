from django.http import request
from django.shortcuts import render, get_object_or_404
from django.template.defaulttags import url

from django.views.generic import TemplateView

from articles.models import Article
#from common.models import Presentation

# en utilisant des classes au lieu de fonction il suffit de passer des attributs aux noms standardisés
# pour obtenir le même résultat que la fonction opère à l'aide de fonction django. Ici template_name
# permet de spécifier le template que doit renvoyer la view sans écrire return render(request, "xxx.html")
# si on respecte la norme de nomination des templates (app/model_viewtype.html, ici common/home.html, dans ce
# cas la variable template_name n'est même plus nécessaire.)
from common.models import HomePage


class MainView(TemplateView):
    template_name = 'main.html'
    # on peut spécifier un modele ici:
    # model = NomduModel (un model doit être créé dans le fichier models.py)
    # quand on fait cela, dans la page html on peut utiliset le mot object au lieu du nom du model
    # comme variable de context on a donc plus besoin de passer un context comme on le fait avec une fonction
    # attention à bien préciser Mainview.as_view() quand on appelle la classe dans le fichier urls.py


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
    return render(request, 'common/test.html') #  , context)


class HomePageView(TemplateView):

    template_name = 'common/preview.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['object'] = get_object_or_404(HomePage, name="blog tech")
        return context


