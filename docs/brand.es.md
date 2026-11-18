# Marca FaiND

La versión en vivo, con descargas, está en [design/brand/](https://joselblas.github.io/hireframe/design/brand/) (en inglés).

## La idea

Find a job. Keep your head. La IA está escrita dentro de la palabra, sin hacer ruido, y no es el titular. Lo más fuerte del producto es la privacidad, el contexto en texto plano y los números honestos; la IA sirve a eso.

## El nombre

- Se dice "find". Se escribe **FaiND**: F, N y D en mayúscula y "ai" en minúscula.
- Una mayúscula en medio de una palabra la leen letra a letra algunos lectores de pantalla. Por eso el logotipo lleva el texto "find" para tecnologías de apoyo. En texto plano, donde no se puede, añade qué es la primera vez: "FaiND, el kit abierto de búsqueda de empleo".
- El repositorio se llama **hireframe** (hire + wireframe; antes `jobops-kit`, renombrado en noviembre de 2026; los enlaces antiguos redirigen en GitHub). Las habilidades pasaron de `jobops-` a `faind-` el 18 de noviembre de 2026 (`faind-start` y las demás), así el nombre del producto es el mismo en todas partes. Quien tenga instaladas las antiguas las quita y añade las nuevas carpetas.
- Los títulos de página no pueden llevar texto oculto, así que usan el nombre tal como se escribe.

### Riesgo del nombre

Una búsqueda en la web el 13 de noviembre de 2026 encontró otros productos con el mismo nombre o muy parecido: FAIND (una app de IA que conecta personas con intereses parecidos, 2024), Faind (un asistente de compras con IA), Faind (búsqueda profesional y emparejamiento de freelancers, noviembre de 2025) y una empresa con la grafía exacta FaiND que hace una plataforma de sensores con IA para etiquetas RFID (2024). No he comprobado dominios, nombres en redes sociales ni el registro de marcas de la UE (EUIPO).

Para un proyecto abierto de portfolio el riesgo es bajo. Para algo comercial, o si quieres posicionarte por tu propio nombre, es un problema real. Dos mitigaciones: escríbelo siempre con su descripción la primera vez ("el kit abierto de búsqueda de empleo") y mantén el nombre en un solo sitio para poder cambiarlo. En el código el logotipo es un único fragmento SVG y el nombre aparece en unos pocos títulos de página, así que renombrar es un trabajo corto.

## Logotipo

La marca Hireframe y el nombre, dibujados como curvas para que se vean igual en todas partes. Cuatro esquinas de wireframe, como los tiradores de una selección en una herramienta de diseño, encuadran un núcleo dorado: hire más wireframe, y elegir lo que importa. "ai" va en el color de acento. La letra es Poppins Medium. Elegida el 18 de noviembre de 2026 entre cinco propuestas en `design/brand/proposals/`.

- Sobre claro, el núcleo dorado va dentro de un anillo de acero profundo (`#2E5C72`), porque el dorado sobre bruma no llega a 3 a 1. Sobre oscuro y sobre tinta profunda, el núcleo va solo.

- Usa los archivos suministrados en `design/brand/assets/`. Versión clara sobre claro, oscura sobre oscuro.
- Espacio libre: tres veces el ancho del núcleo dorado. Ancho mínimo 96 px para el logotipo, 16 px para la marca sola.
- No lo reescribas, estires, contornees, le pongas sombras ni lo recolorees. No pongas "ai" en dorado ni el núcleo dorado sin anillo sobre fondo claro.

## Color

| Nombre | Valor | Uso |
|--------|-------|-----|
| Bruma | `#E1EBF0` | Superficie clara |
| Teal | `#A9CDD4` | Rellenos suaves, la marca sobre oscuro |
| Acero | `#477A91` | La marca y la IA sobre claro |
| Acero profundo | `#2E5C72` | Botones y enlaces sobre claro |
| Tinta | `#17313E` | Texto sobre claro |
| Dorado | `#D6AA58` | La IA sobre oscuro, el punto, el color de acción en oscuro |
| Noche | `#0F2029` | Superficie oscura |

Contraste medido: dorado sobre blanco es 2,15 a 1, así que nunca se usa para texto pequeño sobre claro. Dorado sobre noche es 7,74 a 1. Acero profundo sobre blanco es 7,27 a 1. En el [design system](design-system.es.md) están todos los pares.

## Voz

Humor seco y columna estoica. Di el número, qué significa y una frase que valga la pena guardar. Nunca "no te preocupes".

- Suena a FaiND: "A rejection is mail. Not a verdict." "26 applications is a small sample. Treat every comparison as a hint, not a result."
- No suena a: "Don't worry, the right role is out there!" "Supercharge your career with AI."
- Palabras sencillas, frases cortas, sin exageraciones. Escribe para alguien que lee inglés como segunda lengua.

## Textos listos

Cada uno es cierto hoy. Ojo con las dos capas de privacidad: el panel y tus archivos son locales, y lo que le das a Claude lo procesa Claude según los ajustes de tu cuenta. Mira [privacidad](privacy.es.md).

- **Lema:** Find a job. Keep your head.
- **Una línea:** FaiND es un kit abierto de búsqueda de empleo. Lleva un registro honesto, muestra tus probabilidades reales y mantiene tus archivos en tu ordenador.
- **Descripción corta:** FaiND te ayuda a llevar una búsqueda de empleo tranquila y honesta con Claude. Todo es texto plano, el panel funciona en tu navegador y tus archivos siguen siendo tuyos.
- **Bio (LinkedIn, X, GitHub):** Kit abierto de búsqueda de empleo para Claude. Números honestos, contexto en texto plano, tus archivos en tu ordenador. Hecho por un diseñador UX durante una búsqueda real.
- **Descripción del repositorio:** FaiND: a calm, honest job search kit for Claude. Plain-text context, local dashboard, nothing uploaded by the dashboard.

## Recursos

En `design/brand/assets/`: tres logotipos con la marca (claro, oscuro, tinta profunda), tres sin ella, la marca para claro y para oscuro, un favicon que sigue el tema del sistema, un avatar de 512 px, una tarjeta para compartir de 1200 por 630 y un banner de LinkedIn de 1584 por 396.
