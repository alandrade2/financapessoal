from django.contrib import admin
from django.urls import path
from cadastro.views import initial, adminlog, login_view, logout_view, pag_ini
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", initial, name="home"),  # Página inicial
    path("admin/", admin.site.urls),
    path("admlog/", adminlog, name="admin"),  # Página Administracao
    path("login/", login_view, name="login"),  # Página Login
    path("logout/", logout_view, name="logout"),  # Página Logout
    path("home/", pag_ini, name="raiz"),  # Página Logout    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
