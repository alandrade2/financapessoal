from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.shortcuts import render, redirect


def initial(request):
    return render(request, "index.html")


def adminlog(request):
    return redirect("/admin/")

# login e logout
def login_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect("raiz")
        else:
            login_form = AuthenticationForm()
    else:
        login_form = AuthenticationForm()
    return render(request, "signin.html", {"login_form": login_form})


def logout_view(request):
    logout(request)
    return redirect("home")


@login_required(login_url="login")
def pag_ini(request):
    return render(request, "home.html")