from django.contrib import admin
from django.urls import path
from sitio.views import home, proyectos_list, proyecto_detalle

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", home, name="home"),
    path("proyectos/", proyectos_list, name="proyectos"),
    path("proyectos/<slug:slug>/", proyecto_detalle, name="proyecto_detalle"),
]
