"""Blog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.http import HttpResponseRedirect
from django.template.defaulttags import url
from django.urls import path

import store.views
from articles.views import article_detail, lire_article, articles_index, new_post, edit_post, ArticleDeleteView
from store.views import index, product_detail, add_to_cart, cart, delete_cart, base
from Blog import settings
from accounts.views import signup, logout_user, login_user, signup_form
from common.views import homepage, MainView, HomePageView

urlpatterns = [
    path('', MainView.as_view(), name='main'),
    
    path('common/', HomePageView.as_view(), name='home'),
    
    path('store/', base, name="base"),
    path('store/index', index, name="index"),
    path('admin/', admin.site.urls, name='admin'),

    path('signup/', signup, name= "signup"),
    path('login/', login_user, name="login"),
    path('logout/', logout_user, name="logout"),
    path('signup_form/', signup_form, name="signup-form"),

    path('cart/', cart, name="cart"),
    path('cart/delete/', delete_cart, name="delete-cart"),

    path('product/<str:slug>/add-to-cart', add_to_cart, name= "add-to-cart"),
    path('product/<str:slug>/', product_detail, name="product"),

    path('articles/index', articles_index, name="articles-index"),
    path('article/<str:slug>/', article_detail, name="article"),
    path('article/lire-article/<str:slug>', lire_article, name="lire-article"),
    path('articles/new-post/', new_post, name="new-post"),
    path('articles/edit-post/<str:slug>', edit_post, name="edit-post"),
    path('articles/delete-post/<str:slug>', ArticleDeleteView.as_view(), name="del-post"),


] + static(settings.MEDIA_URL,document_root= settings.MEDIA_ROOT)
