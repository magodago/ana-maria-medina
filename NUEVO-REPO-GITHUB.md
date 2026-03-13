# Borrar el repo actual y usar uno nuevo en GitHub

## 1. Borrar el repositorio actual

1. Entra en: **https://github.com/magodago/ana-maria-medina-model**
2. Arriba: **Settings** (Configuración).
3. Baja hasta **Danger zone**.
4. Pulsa **Delete this repository**.
5. Escribe el nombre del repo (`magodago/ana-maria-medina-model` o lo que pida).
6. Confirma con **I understand the consequences, delete this repository**.

## 2. Crear un repositorio nuevo

1. Entra en: **https://github.com/new**
2. **Repository name:** el que quieras, por ejemplo:
   - `ana-maria-medina-model` (mismo nombre), o
   - `magodago.github.io` (para que la web sea https://magodago.github.io/)
3. **Public**, sin marcar README, .gitignore ni license.
4. Pulsa **Create repository**.

## 3. Enlazar tu proyecto local al repo nuevo

Abre PowerShell en la carpeta del proyecto y ejecuta (sustituye `NOMBRE-DEL-NUEVO-REPO` por el nombre real):

```powershell
cd "c:\Users\dorti\Desktop\pagina Ana\ana-maria-medina-model"
git remote set-url origin https://github.com/magodago/NOMBRE-DEL-NUEVO-REPO.git
git push -u origin main
```

Si el repo nuevo se llama `ana-maria-medina-model`:

```powershell
git remote set-url origin https://github.com/magodago/ana-maria-medina-model.git
git push -u origin main
```

Si creaste `magodago.github.io` y quieres publicar la web ahí (sin basePath, como en local):

```powershell
git remote set-url origin https://github.com/magodago/magodago.github.io.git
git push -u origin main
npm run deploy:user-site
```

Luego en GitHub: repo → **Settings** → **Pages** → Source: branch **gh-pages** → Save. La web quedará en https://magodago.github.io/
