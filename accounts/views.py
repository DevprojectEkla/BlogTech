from django.contrib.auth import get_user_model, login, logout, authenticate
from django.contrib.auth.hashers import make_password
from django.shortcuts import render, redirect, get_object_or_404

from accounts.models import BlogVisitor
from .forms import SignupForm
# Create your views here.
User = get_user_model()


def signup_form(request):
    form = SignupForm()
    context = {}
    return render(request,'accounts/signup_form.html',context)

def signup(request):
    form = SignupForm()
    context = {'form': form}
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        print(request.POST)
        print(username)
        print(password)
        form = SignupForm(request.POST)        
        
        print(form.is_valid())
        if form.is_valid():
            print("valide")            
            # print(form.data['password'])
            # print(f"{form.fields.values()} ceci est un test" )
            # password = make_password(form.data['password']) from django.contrib.auth.hashers import make_password
            # form.data.__setattr__('password', password)
            # form.save()
            # User = get_user_model()
            # user = User.objects.create_user(username=username, password=password)
            # user = User.objects.get(username=username, password=password)
            form.save() # à partide de ce moment un modele BlogVisitor a été créé mais le mot
            # de passe utilisateur est stocké en clair, il faut le récupérer en clair pour l'authentification
            # mais il faut le hasher pour le sauvegarder dans la base de donnée.
             # fonction django pour hasher le mdp
            # print(password)
            # print(f'User.passwor:{User.password}')
            user_model = BlogVisitor.objects.get(username=username) # méthode pour récupérer une instance d'un modèle            
            user_model.password = password # le mdp hashé est stocké dans la DB
            user_model.save() # ne pas oublier de sauver pour que la valeur soit bien prise en compte        
            user = authenticate(username=username, password=raw_password) # fonction django
            # d'authentification, le mdp doit être en clair, c'est ce que l'utilisateur tape.
            # à dire vrai ce n'est pas utile de faire cela ici puisque l'utilisateur vient juste
            # de créer un compte, a priori les informations sont valides. Pourrait-il y avoir une 
            # faille de sécurité à ce niveau là sans cela ?
            
            if user:
                login(request, user)
                return redirect('home')
    # return render(request, 'accounts/signup.html', context)
    return render(request, 'accounts/signup_form.html', context)


def logout_user(request):
    logout(request)
    return redirect('main')


def login_user(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return redirect('home')
        else:
            print('authentication failed')
    return render(request, 'accounts/login.html')