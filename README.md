# PORTAFOLIO — Django 5 (M8_AE1)

Portafolio profesional construido con **Django** para presentar investigación, evaluación de referentes reales y una **selección curada de proyectos** (académicos, personales y colaborativos). El foco está en **claridad, accesibilidad, seguridad y desempeño**, además de documentar buenas prácticas de despliegue.

> **Contexto académico:** Este proyecto fue desarrollado en el marco de la actividad **M8_EVALUACIÓN DEL_MÓDULO** del Bootcamp.


## 🎯 Objetivos del proyecto
- Mostrar trabajos y proyectos de forma clara, responsive y con buen rendimiento.
- Implementar **buenas prácticas de seguridad** (headers, CSP de servidor, manejo de secretos).
- Mantener una base de código ordenada, versionable y lista para despliegue.
- Dejar una **documentación de instalación** simple para reproducir el entorno local.


## 🧩 Características principales
- **Django 5** + templating clásico (HTML + CSS + JS).
- Estructura simple para **páginas y detalle de proyectos** (`home.html`, `proyectos.html`, `proyecto_detalle.html`).
- **Base template** (`base.html`) con bloques reutilizables.
- **Estaticos** en `static/` y templates en `templates/`.
- **Seguridad**: recomendaciones para `.env`, headers y CSP en NGINX.
- **Listo para despliegue** en un VPS con **Nginx** (DigitalOcean u otros).


## 🛠️ Stack y requisitos
- Python 3.12+
- Django 5.x
- Pip + venv
- (Opcional) NGINX para producción

> Recomendado: Windows 11 + PowerShell o Linux/macOS con Bash.


## 📁 Estructura del repo
```
PORTAFOLIO/
├─ .venv/                 # entorno virtual (no versionar)
├─ config/                # config del proyecto (si aplica)
├─ sitio/                 # app principal (si aplica)
├─ static/                # CSS, JS, imágenes y assets
├─ templates/             # base.html, home.html, proyectos.html, proyecto_detalle.html
├─ manage.py
├─ db.sqlite3             # BD local (no usar en producción)
├─ LICENSE                # Licencia restrictiva (Todos los derechos reservados)
└─ .gitignore
```



## 🧾 Cumplimiento M8 (resumen)
- **Sitio responsive** con página principal y secciones de proyectos y detalle.
- **Código organizado** con `base.html` y templates modulares.
- **Buenas prácticas** de seguridad y despliegue documentadas.
- **Repositorio** con `.gitignore` seguro y `LICENSE` propia.
- **Readme** con instrucciones claras de instalación, uso y despliegue.


## 🌐 Despliegue 
1. GitHub pages


## 📜 Licencia y uso de marcas
Este repositorio se distribuye bajo **“LICENCIA DE USO — TODOS LOS DERECHOS RESERVADOS”**.  
Queda **prohibido** copiar, forkar, clonar, redistribuir, reutilizar activos (imágenes, videos, logos, UI, contenidos) o entrenar modelos de IA con este material sin autorización **previa y por escrito**.  
Incluye cláusulas específicas para **embeds y contenidos de YouTube**.  
Consulta el archivo [`LICENSE`](LICENSE) para detalles.

**Marcas:** *Data Prospectiva SPA* y *NoOne* son marcas con elementos visuales y comerciales protegidos. No se autoriza su uso.


## 🤝 Contacto
**Marcelo Navarrete** — marcelonavarretey@gmail.com

---


