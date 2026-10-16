# CLAU Nutriflow - Landing Page de Conversión (SEO & GEO)

Landing Page moderna, minimalista y orgánica desarrollada para **CLAU Nutriflow**, tienda de frutos secos seleccionados, mixes energéticos, semillas agroecológicas y miel pura en la Ciudad Autónoma de Buenos Aires (CABA).

---

## 🌿 Características Principales

- **Diseño UI/UX Orgánico y Minimalista:** Estética moderna con estructura Bento Grid, fondos crema/arena suave (`#FDFBF7`), acentos verde bosque (`#1B4332`) y tonos tierra tostados.
- **Optimización para Conversión (CRO):**
  - Hero Section con propuesta de valor clara y micro-copys de confianza.
  - Bento Grid destacando origen 100% natural, logística rápida, packs resellables y 0% azúcares añadidos.
  - Catálogo interactivo con filtrado dinámico por categorías (*Mixes*, *Frutos Secos*, *Semillas & Miel*).
  - Drawer de carrito de compras rápido con cálculo automático de totales y checkout directo a WhatsApp con mensaje preformateado.
  - Prueba social con calificaciones de 5 estrellas y opiniones de clientes locales.
- **Optimización SEO On-Page:**
  - Jerarquía estricta de encabezados (`H1`, `H2`, `H3`).
  - Atributos `alt` contextualizados en todas las imágenes.
  - Microdatos enriquecidos **JSON-LD Schema.org** integrados: `LocalBusiness`, `Product / ItemList` y `FAQPage`.
- **Optimización GEO (Local CABA & GBA):**
  - Announcement bar superior geolocalizada.
  - Calculadora interactiva con tiempos estimados de entrega por barrio (Palermo, Belgrano, Caballito, Devoto, GBA Norte/Oeste/Sur e Interior).
  - Información de contacto NAP (Name, Address, Phone) visible en toda la página.
- **Totalmente Responsive:** Diseño *Mobile-first* con menú hamburguesa desplegable y navegación fluida.

---

## 🚀 Cómo Visualizar el Proyecto

### Opción 1: Servidor Local (Recomendado)
Abre la terminal en la raíz del proyecto y ejecuta:

```bash
# Con Python (nativo en macOS):
python3 -m http.server 3000
```
Luego accede desde tu navegador a: [http://localhost:3000](http://localhost:3000)

### Opción 2: Abrir directamente en el navegador
```bash
open -a "Google Chrome" index.html
# o
open -a Safari index.html
```

---

## 📁 Estructura del Proyecto

```text
├── index.html            # Landing page principal completa (HTML5 + Tailwind CSS + Lucide Icons)
├── components/
│   └── LandingPage.jsx   # Componente modular en React / Tailwind para Next.js / Vite
├── Resources/            # Catálogo oficial y material gráfico original
├── Notas/
│   └── UX-UI.md          # Especificaciones de diseño y directrices de conversión
└── README.md             # Documentación del proyecto
```

---

## 📦 Tecnologías Utilizadas

- **HTML5 Semántico**
- **Tailwind CSS** (vía CDN con configuración personalizada de temas y paleta de colores)
- **Lucide Icons**
- **Google Fonts** (*Plus Jakarta Sans*)
- **Schema.org** (JSON-LD)
- **JavaScript ES6+** (Vanilla sin frameworks pesados para carga ultrarrápida)
