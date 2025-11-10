from django.shortcuts import render, get_object_or_404
from .models import Proyecto

def home(request):
    # Top 6 publicados por orden (usaremos esto si luego conectas el Home a DB)
    destacados = Proyecto.objects.filter(publicado=True).order_by("orden", "-creado")[:6]
    return render(request, "home.html", {"destacados": destacados})

def proyectos_list(request):
    qs = Proyecto.objects.filter(publicado=True).order_by("orden", "-creado").prefetch_related("tags")
    return render(request, "proyectos.html", {"proyectos": qs})

def proyecto_detalle(request, slug):
    p = get_object_or_404(Proyecto.objects.prefetch_related("tags"), slug=slug, publicado=True)
    # Para navegación siguiente/anterior (opcional)
    vecinos = list(Proyecto.objects.filter(publicado=True).order_by("orden", "-creado"))
    prev_obj = next((x for x in vecinos if x.orden < p.orden), None)
    next_obj = next((x for x in vecinos if x.orden > p.orden), None)
    ctx = {"p": p, "prev_obj": prev_obj, "next_obj": next_obj}
    return render(request, "proyecto_detalle.html", ctx)
