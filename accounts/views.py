from django.contrib.auth import get_user_model, login, logout, authenticate
from django.shortcuts import render, redirect
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
            form.save()
            print(form.fields['username'])
        user = User.objects.get(username=username, password=password)
        login(request, user)
        return redirect('main')
    #return render(request, 'accounts/signup.html')
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
    return render(request, 'accounts/login.html')