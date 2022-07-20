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
        form = SignupForm(request.POST)
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
            form.save()
            raw_password = password
            password = make_password(password)
            # print(password)
            # print(f'User.passwor:{User.password}')
            user_model = BlogVisitor.objects.get(username=username)
            print(f'username = {user_model.username}')
            print(f'model = {user_model}')
            user_model.password = password
            user_model.save()
            print(f'user_model.password = {user_model.password}')
            print(f'username:{username}')
            print(f'pass:{raw_password}')
            user = authenticate(username=username, password=raw_password)
            print(f'authentication={user}')
            if user:
                login(request, user)
                return redirect('main')
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