from django.db import models

class Tag(models.Model):
    nombre = models.CharField(max_length=40, unique=True)

    class Meta:
        ordering = ["nombre"]

    def __str__(self):
        return self.nombre


class Proyecto(models.Model):
    titulo = models.CharField(max_length=120)
    slug = models.SlugField(max_length=140, unique=True)
    resumen = models.TextField(max_length=300, blank=True)
    descripcion = models.TextField(blank=True)  # usarás esto para “más info” del detalle
    repo_url = models.URLField(blank=True)
    demo_url = models.URLField(blank=True)
    cover_url = models.URLField(blank=True, help_text="URL de imagen/pantallazo principal (opcional)")
    tags = models.ManyToManyField(Tag, blank=True, related_name="proyectos")
    orden = models.PositiveIntegerField(default=0)
    publicado = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    actualizado = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["orden", "-creado"]

    def __str__(self):
        return self.titulo
