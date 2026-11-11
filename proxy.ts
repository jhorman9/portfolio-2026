import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const homepageMarkdown = `# Jhorman Nieto

> Especialista en soluciones digitales desde Panamá.

Jhorman Nieto ofrece desarrollo web y de aplicaciones, marketing digital, diseño de interfaces, fotografía, video y producción de contenido creativo.

## Secciones principales

- [Sobre mí](https://jhorman.com/about): Perfil profesional, experiencia y habilidades.
- [Servicios](https://jhorman.com/service): Desarrollo web, marketing digital y producción creativa.
- [Portafolio](https://jhorman.com/portfolio): Proyectos y trabajos seleccionados.
- [Blog](https://jhorman.com/blog): Artículos sobre tecnología, diseño y marketing digital.
- [Contacto](https://jhorman.com/contact): Formulario para iniciar un proyecto.

## Identidad

- Sitio: https://jhorman.com/
- Autor: Jhorman Nieto
- Ubicación: Ciudad de Panamá, Panamá
- LinkedIn: https://www.linkedin.com/in/jhormandev
- GitHub: https://github.com/jhorman9/
`;

export function proxy(request: NextRequest) {
  const acceptsMarkdown = request.headers
    .get("accept")
    ?.toLowerCase()
    .includes("text/markdown");

  if (acceptsMarkdown && (request.method === "GET" || request.method === "HEAD")) {
    return new Response(request.method === "HEAD" ? null : homepageMarkdown, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
        Vary: "Accept",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
