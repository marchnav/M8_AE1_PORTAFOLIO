from django.contrib import admin
from .models import Proyecto, Tag

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    search_fields = ["nombre"]
    list_display = ["nombre"]

@admin.register(Proyecto)
class ProyectoAdmin(admin.ModelAdmin):
    list_display = ("titulo", "publicado", "orden", "actualizado")
    list_editable = ("publicado", "orden")
    search_fields = ("titulo", "resumen", "descripcion")
    list_filter = ("publicado", "tags")
    prepopulated_fields = {"slug": ("titulo",)}
    filter_horizontal = ("tags",)
