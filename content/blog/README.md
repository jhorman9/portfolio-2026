# Publicar artículos

Cada archivo `.md` de esta carpeta se publica en `/blog/nombre-del-archivo`. El nombre debe usar minúsculas y guiones. El blog, el sitemap y los metadatos leen los archivos durante el build; después de agregar o editar uno, hay que desplegar de nuevo.

## Formato

```md
---
title: "Título claro y específico"
description: "Resumen útil de unas 140–160 letras."
category: "Desarrollo web"
published: "2026-11-05"
updated: "2026-11-05"
---

Primer párrafo que responde a la búsqueda.

## Un subtítulo descriptivo

Contenido original...
```

`updated` es opcional y debe cambiar solo cuando se revise de manera sustancial el artículo. No incluyas un título `#` en el cuerpo: la página ya muestra el `h1`. Usa enlaces internos a servicios y proyectos relevantes, fuentes externas primarias para datos y fechas reales. Evita testimonios, métricas o experiencias sin respaldo. Verifica enlaces, ortografía, actualidad y exactitud antes de cada publicación.

## Línea editorial sugerida para Panamá

1. **Tienda en línea para un negocio panameño:** decisión entre catálogo, WhatsApp y checkout; conecta con desarrollo web y ecommerce.
2. **Meta Ads para servicios en Panamá:** objetivos, medición y calidad de consultas; conecta con Meta Ads y marketing.
3. **SEO local y búsqueda con IA:** estructura, contenido y medición; conecta con desarrollo y marketing.
4. **Fotografía de producto para ecommerce:** preparar una sesión, formatos de imagen y consistencia visual; publicar cuando haya ejemplos propios autorizados.
5. **Caso de proyecto en Panamá:** proceso, decisiones y capturas; publicar después de revisar datos y permisos del cliente.

Los tres primeros ya están escritos en esta carpeta. Son guías de decisión para posibles clientes, no promesas de posicionamiento. Google explica que las funciones de búsqueda con IA se apoyan en sus fundamentos de SEO y que [no requieren archivos especiales de Markdown o llms.txt](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide). Para evaluar visibilidad real, usa Search Console después del despliegue.
