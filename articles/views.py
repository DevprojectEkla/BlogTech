from django.shortcuts import render, get_object_or_404, redirect

# Create your views here.
from django.urls import reverse
from django.utils.datetime_safe import datetime

from articles.forms import PostForm, EditForm
from articles.models import Article, Comment


def article_detail(request, slug):
    article = get_object_or_404(Article, slug=slug)
    return render(request, 'articles/detail.html', context={"article": article})


def lire_article(request, slug):
    if request.method == "POST":
        print("add_comment function enable")
        new_comment = add_comment(request, slug)
        all_article_comments = Comment.objects.filter(article=new_comment.article)
        print(all_article_comments)
        context = {"article": new_comment.article, "all_article_comments": all_article_comments,
                   "new_comment": new_comment}

        return render(request, 'articles/lire-article.html', context)
    else:
        print("lecture de l'article'")
        article = get_object_or_404(Article, slug=slug)
        all_article_comments = Comment.objects.filter(article=article)
        context = {"article": article, "all_article_comments": all_article_comments}
        return render(request, 'articles/lire-article.html', context)


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
    edit = EditForm()
    text = article.text
    edit
    context = {'article':article, 'slug': slug, 'text': text}
    return render(request, 'articles/edit-post.html', context)
