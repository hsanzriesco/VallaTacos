# Valla Tacos · Guía rápida

**Ver la web:** doble clic en `index.html`.

**Subir a Hostinger:** entra en Hostinger → Administrador de archivos → `public_html` → arrastra TODO el contenido de esta carpeta (incluido `.htaccess`).

**Editar textos, platos y datos:** abre `lib/manifest.js` con el Bloc de notas. Cambia lo que hay entre comillas `"..."` y guarda.
- `brand`: nombre, teléfono, dirección, Instagram, horario, enlace de reseñas.
- `dishes`: cada plato es un bloque `{...}`. Copia uno y pégalo debajo para añadir otro (máx. 10).
- `services` y `reviews`: igual.

**Cambiar fotos:** pon tu foto en `assets/img/` con el mismo nombre (`hero.jpg`, `franceses.jpg`, `pollo.jpg`, `kebab.jpg`, `especial.jpg`, `patatas.jpg`, `salsas.jpg`).

**Cambiar el WhatsApp:** en `lib/manifest.js` (`whatsapp`, sin +) y en `index.html` busca `34633077757` y sustitúyelo.

**Si algo no se actualiza:** pulsa Ctrl+F5. Si sigue igual, en `index.html` cambia `?v=20260929` por la fecha de hoy.
