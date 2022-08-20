from django.shortcuts import render, get_object_or_404, redirect

# Create your views here.
from django.urls import reverse
from django.utils.datetime_safe import datetime
from django.views.generic import DeleteView, UpdateView

from articles.forms import PostForm, EditForm
from articles.models import Article, Comment

def article_detail(request, slug):
    if request.method == "POST":
        print("add_comment function enable")
        new_comment = add_comment(request, slug)
        all_article_comments = Comment.objects.filter(article=new_comment.article)
        print(all_article_comments)
        context = {"article": new_comment.article, "all_article_comments": all_article_comments,
                   "new_comment": new_comment}

        return render(request, 'articles/detail.html', context={"article": article})
    else:
        print("lecture de l'article'")
        article = get_object_or_404(Article, slug=slug)
        all_article_comments = Comment.objects.filter(article=article)
        context = {"article": article, "all_article_comments": all_article_comments}
        return render(request, 'articles/detail.html', context)


def articles_index(request):
    articles = Article.objects.all()
    return render(request, 'articles/index.html', context={"articles": articles})


def add_comment(request, slug):
    print("ajout d'un commentaire")
    if request.method == "POST":
        article = get_object_or_404(Article, slug=slug)
        user = request.user
        print(user)
        comment_text = request.POST.get("commentaire")
        print(comment_text)
        if user.is_authenticated:
            new_comment = Comment.objects.create(user=user, text=comment_text, article=article, date=datetime.today())
            print(new_comment)
            if new_comment:
                article.comments += 1
                article.save()
                new_comment.save()
                return new_comment
                # return redirect(reverse("lire-article", kwargs={"slug": slug}))

    # return render(request, 'lire-article')


def new_post(request):
    form = PostForm()
    context = {'form': form}
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'articles/index.html', context)
    return render(request, 'articles/new-post.html', context)


def edit_post(request, slug):
    article = get_object_or_404(Article, slug=slug)
    form = EditForm() #initial=[{'title': article.title, 'author': article.author}])# ,'intro': article.intro}])# 'text': article.text,
                              #'date': datetime.today()}])
    form['title'].initial = article.title
    form['intro'].initial = article.intro
    form['author'].initial = article.author
    form['text'].initial = article.text
    form['image'].initial = article.image
    form['slug'].initial = article.slug
    form['date'].initial = datetime.today()
    form['comments'].initial = article.comments
    print(form['title'].value())
    print(article.title)
    context = {'form': form, 'article': article, 'slug': slug, 'text': article.text}
    if request.method == "POST":
        # ce qui suit en commentaire pourra servir de pense-bête pour les différentes méthodes et appel des valeurs
        # de champ, mais pour lier des données directement à des champs on est obligé de faire appel au constructeur
        # en instanciant une classe avec un dictionnaire en argument pour renseigner chaque champ :
        # par ex: Editform(data) rempli le formulaire pour chaque champ avec data = {'champ1':valeur1,'champ2':valeur2,
        # etc...} et voila la consigne de Django qui est en tout petit et qui devrait être en très gros:
        # Si vous souhaitez modifier d’une quelconque manière les données d’une instance Form liée ou si vous aimeriez
        # lier une instance Form non liée à certaines données, créez une nouvelle instance de Form. Il n’est pas
        # possible de modifier les données dans une instance Form. Dès qu’une instance Form a été créée, ses données
        # doivent être considérées comme immuables, que les données existent ou non.
        # OK
        # Il est donc inutile de faire ce qui suit pour essayer de récupérer une par une les données des champs
        # modifiés pour les sauvegarder dans le champ préexistant.NB: form.changed_data() renvoit la liste des champs
        # modifiés, c'est toujours bon à savoir.
        # for fields in form.get_context()['form']:
        #     print(request.POST.get(fields.name))
        #     print(fields.value())
        #         print(form[f'{fields.name}'].value())
        # Les deux lignes suivantes font le boulot, même si cela semble un peu sale de supprimer une instance d'article
        # pour en recréer une au lieu de l'updater comme il se doit.
        # L'idée est de pouvoir créer d'un seul coup un article avec les champs nouvellement édités dans le nouveau
        # formulaire. Ne pas oublier que l'on se donne ici un champ pour créer un modèle d'article, c'est donc
        # différent par rapport à la modification via l'interface d'admin, bref ce qui suit fait l'affaire :
        article.delete()
        form = EditForm(request.POST)
        # for field in form:
        #     if not field == field.initial:
        #         print(field.value())
        #         request.POST.get(field.value())
        if form.has_changed():
            if form.is_valid():
                form.save()
                return render(request, 'articles/detail.html', context)
    return render(request, 'articles/edit-post.html', context)


""" ici on va utiliser les class de Django plutôt que les fonctions"""

class ArticleUpdateView(UpdateView):
    pass


class ArticleDeleteView(DeleteView):

    model = Article
    success_url = '/'

    def get_absolute_url(self):
        return reverse('articles-index')
