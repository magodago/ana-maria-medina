# Cómo hacer que se vea la web (y no el README)

GitHub Pages está mostrando el README porque **todavía usa la rama main**. Hay que decirle que use la rama **gh-pages**, donde está la web construida.

## Pasos (hazlos en este orden)

1. Abre tu repositorio: **https://github.com/magodago/ana-maria-medina-model**

2. Arriba, haz clic en **Settings** (Configuración).

3. En el menú de la izquierda, haz clic en **Pages** (dentro de "Code and automation").

4. En **Build and deployment** (Construir y desplegar):
   - Donde dice **Source** (Origen), elige **Deploy from a branch** (Desplegar desde una rama).
   - En **Branch** (Rama): abre el desplegable y elige **gh-pages** (no "main").
   - En **Folder** (Carpeta): deja **/ (root)**.
   - Haz clic en **Save** (Guardar).

5. Espera 1–2 minutos y abre en el navegador (mejor en ventana de incógnito):
   **https://magodago.github.io/ana-maria-medina-model/**

Deberías ver la portada con la foto de Ana Maria, el texto y el botón "Book Ana Maria", no este archivo.

---

Si después de guardar sigue igual, espera 3–5 minutos y prueba de nuevo o en otra ventana de incógnito.
