# Optimización SEO del Portfolio - Guillermo Álvarez Moreno

## Resumen de Optimizaciones Implementadas

### 1. Metadatos Optimizados (`src/app/layout.tsx`)
- ✅ **Title Template**: Implementado para consistencia en títulos
- ✅ **Description**: Mejorada con keywords relevantes y ubicación
- ✅ **Keywords**: Añadidas palabras clave específicas del sector
- ✅ **Open Graph**: Metadatos completos para redes sociales
- ✅ **Twitter Cards**: Configuración para Twitter
- ✅ **Datos Estructurados**: JSON-LD para rich snippets
- ✅ **Robots**: Configuración para indexación

### 2. Archivos Técnicos SEO
- ✅ **robots.txt**: Creado en `/public/robots.txt`
- ✅ **sitemap.xml**: Generado dinámicamente en `/src/app/sitemap.ts`
- ✅ **Google Analytics**: Configuración preparada en `/src/utils/analytics.ts`

### 3. SEO Semántico y Estructura
- ✅ **Jerarquía de Encabezados**: H1 único en Hero, H2 para secciones, H3 para subtítulos
- ✅ **Etiquetas Semánticas**: `<section>`, `<article>`, `<nav>`, `<footer>`
- ✅ **Atributos alt**: Añadidos a todas las imágenes
- ✅ **Contenido Optimizado**: Keywords integradas naturalmente

### 4. Accesibilidad (a11y)
- ✅ **Atributos ARIA**: Implementados en formularios y navegación
- ✅ **Navegación por Teclado**: Mejorada con focus visible
- ✅ **Roles y Labels**: Añadidos para lectores de pantalla
- ✅ **Contraste**: Verificado para legibilidad

### 5. Rendimiento
- ✅ **Imágenes**: Optimizadas con Next.js Image
- ✅ **Fuentes**: Configuradas con next/font
- ✅ **Carga**: Prioridad en imágenes críticas

## Próximos Pasos Recomendados

### 1. Crear Imagen OG
```bash
# Crear una imagen de 1200x630px en public/og-image.png
# Ver instrucciones en public/og-image.txt
```

### 2. Configurar Google Analytics
```bash
# Añadir en .env.local:
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. Verificar Dominio
```bash
# Cambiar en layout.tsx:
url: 'https://tu-dominio-real.com'
canonical: 'https://tu-dominio-real.com'
```

### 4. Google Search Console
1. Verificar propiedad del sitio
2. Añadir código de verificación en layout.tsx
3. Enviar sitemap.xml

### 5. Herramientas de Análisis
- **Lighthouse**: Para Core Web Vitals
- **Google PageSpeed Insights**: Para rendimiento
- **GTmetrix**: Para análisis detallado
- **Screaming Frog**: Para auditoría SEO completa

## Keywords Principales Optimizadas

### Primarias
- "Desarrollador Fullstack Sevilla"
- "React Developer"
- "Next.js Expert"
- "Portfolio de desarrollador"

### Secundarias
- "Inteligencia Artificial"
- "Desarrollo web moderno"
- "Frontend Developer"
- "Backend Developer"
- "JavaScript Developer"
- "TypeScript Developer"

### Long-tail
- "Desarrollador Fullstack React Sevilla"
- "Portfolio desarrollador web Next.js"
- "Desarrollador web especializado en IA"

## Estructura de URLs Optimizada

```
/ (página principal)
/#about (sección sobre mí)
/#projects (sección proyectos)
/#experience (sección experiencia)
/#skills (sección habilidades)
/#contact (sección contacto)
```

## Datos Estructurados Implementados

### Schema.org Person
- Nombre y título profesional
- Descripción y ubicación
- Enlaces sociales (LinkedIn, GitHub)
- Habilidades y conocimientos
- Educación y experiencia laboral

## Métricas SEO a Monitorear

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### SEO Técnico
- **Indexación**: Verificar en Google Search Console
- **Sitemap**: Confirmar que se envía correctamente
- **Robots.txt**: Validar que permite indexación

### Contenido
- **Keywords**: Posicionamiento para términos objetivo
- **Tráfico orgánico**: Seguimiento de visitas
- **Tiempo en página**: Engagement de usuarios

## Comandos Útiles

### Verificar Build
```bash
npm run build
npm run start
```

### Análisis de Bundle
```bash
npm run build
npx @next/bundle-analyzer
```

### Lighthouse
```bash
npx lighthouse https://tu-dominio.com --view
```

## Notas Importantes

1. **Dominio**: Cambiar todas las URLs de ejemplo por tu dominio real
2. **Google Analytics**: Implementar cuando tengas el código de seguimiento
3. **Imagen OG**: Crear una imagen profesional para redes sociales
4. **Verificación**: Añadir códigos de verificación de Google Search Console
5. **Monitoreo**: Configurar alertas para métricas importantes

## Recursos Adicionales

- [Next.js SEO Documentation](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Console](https://search.google.com/search-console)
- [Schema.org Guidelines](https://schema.org/docs/full.html)
- [Web.dev SEO](https://web.dev/learn/seo/)
- [Lighthouse SEO Audit](https://developers.google.com/web/tools/lighthouse)
