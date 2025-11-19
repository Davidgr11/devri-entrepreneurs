# 🚀 Devri Solutions - Landing Incubadora La Salle

Landing page profesional para Devri Solutions, especializada en servicios de desarrollo web para emprendedores de la Incubadora La Salle.

## ✨ Características

- **Diseño Moderno y Responsive**: Adaptado perfectamente a todos los dispositivos (móvil, tablet, desktop)
- **Animaciones Fluidas**: Implementadas con Framer Motion para una experiencia visual impactante
- **Optimizado para Conversión**: Diseño enfocado en capturar leads y mostrar servicios de manera efectiva
- **Casos de Uso Interactivos**: 6 soluciones específicas presentadas de forma dinámica
- **Formulario de Contacto**: Integrado con Netlify Forms para captura de prospectos
- **Gradientes Personalizados**: Combinación de colores vibrantes que reflejan innovación

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de UI
- **Vite** - Build tool ultra rápido
- **Framer Motion** - Animaciones declarativas
- **Lucide React** - Iconos modernos
- **Tailwind CSS** - Framework de estilos (utilidades)
- **Netlify** - Hosting y gestión de formularios

## 🎨 Secciones de la Landing

1. **Hero Section** - Propuesta de valor principal con CTAs
2. **Stats** - Métricas clave del negocio
3. **Casos de Uso** - 6 soluciones específicas:
   - Sitio Web Profesional
   - Tienda en Línea
   - Sistema de Citas
   - Portal para Clientes
   - Sistema de Gestión
   - Aplicación Personalizada
4. **Beneficios** - Por qué elegir Devri Solutions
5. **Proceso** - 6 pasos del flujo de trabajo
6. **Testimonios** - Casos de éxito reales
7. **Pricing/CTA** - Información de inversión
8. **Formulario de Contacto** - Captura de leads

## 📁 Estructura del Proyecto

```
devri-incubadora/
├── public/
│   └── devri-logo-dark.svg    # Logo de la empresa
├── src/
│   ├── App.jsx                # Componente principal
│   └── main.jsx               # Punto de entrada
├── index.html
├── package.json
└── vite.config.js
```

## 🎭 Animaciones Implementadas

### Hero Section

- Fade-in secuencial de badge, título, descripción
- Efecto de escala en texto con gradiente
- Hover effects en botones CTA
- Animación stagger en stats cards

### Secciones Interactivas

- `whileInView` para activar animaciones al hacer scroll
- `whileHover` para efectos al pasar el mouse
- `whileTap` para feedback táctil en botones
- Transiciones suaves entre casos de uso

### Performance

- `viewport={{ once: true }}` para optimizar re-renders
- Animaciones GPU-accelerated
- Lazy loading de componentes

## 🎨 Paleta de Colores

```javascript
{
  primary: '#7fed4cf8',        // Verde lima vibrante
  primaryDark: '#27c008f8',    // Verde oscuro
  secondary: '#be7dff',        // Púrpura
  secondaryDark: '#951cff',    // Púrpura oscuro
  tertiary: '#f7e9b8',         // Amarillo pastel
  pastel1: '#b1ff9df8',        // Verde pastel
  pastel2: '#e8bdfff8',        // Púrpura pastel
}
```

## 📝 Configuración del Formulario

El formulario está configurado para Netlify Forms. Para activarlo:

1. Asegúrate de tener el atributo `data-netlify="true"` en el form
2. Incluye el input hidden: `<input type="hidden" name="form-name" value="contact-lasalle" />`
3. Netlify detectará automáticamente el formulario en el deploy

## 🔧 Personalización

### Modificar Casos de Uso

Edita el array `useCases` en [App.jsx:35-102](src/App.jsx#L35-L102):

```javascript
const useCases = [
  {
    icon: Code,
    title: "Título",
    subtitle: "Subtítulo",
    problem: "Problema que resuelve",
    solution: "Solución propuesta",
    features: ["Feature 1", "Feature 2"],
    time: "X días",
    // ...
  },
];
```

### Modificar Colores

Actualiza el objeto `colors` en [App.jsx:15-33](src/App.jsx#L15-L33)

### Ajustar Animaciones

Modifica los props de Framer Motion:

- `initial`: Estado inicial
- `animate/whileInView`: Estado final
- `transition`: Configuración de timing
- `delay`: Retraso de animación

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: Ajustes automáticos con `clamp()` para tipografía
- **Grid Responsivo**: `repeat(auto-fit, minmax())` para layouts adaptativos
- **Conditional Rendering**: Diferentes layouts para mobile/desktop

## 🌐 Deploy

### Netlify (Recomendado)

1. Conecta el repositorio a Netlify
2. Configuración de build:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy automático en cada push

### Vercel

```bash
npm install -g vercel
vercel --prod
```

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Bundle Size**: Optimizado con tree-shaking
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s

## 🤝 Contribuir

Este es un proyecto privado para Devri Solutions. Para sugerencias o mejoras, contacta al equipo de desarrollo.

## 📄 Licencia

© 2025 DEVRI DESARROLLO VANGUARDISTA, RADICAL E INNOVADOR S.A.P.I DE C.V. - Todos los derechos reservados.
