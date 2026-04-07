# NexoPay — Documentación de Inversión

Documentación profesional para inversionistas de **NexoPay**, la plataforma unificada de pagos digitales para Venezuela.

## Requisitos

- **Node.js** 18+ (recomendado 20 LTS)
- **npm** 9+
- *(Opcional)* Docker y Docker Compose para despliegue containerizado
- *(Opcional)* Nginx para proxy reverso en producción

## Inicio Rápido

```bash
# Instalar dependencias
npm install

# Compilar archivos estáticos en /public
npm run build

# Iniciar servidor
npm start
```

El servidor estará disponible en **http://localhost:3000**

## Opciones de Despliegue

### 1. Node.js directo

La opción más simple para desarrollo y servidores propios.

```bash
npm install
npm run build
PORT=8080 npm start
```

Variables de entorno:
| Variable | Default | Descripción |
|----------|---------|-------------|
| `PORT` | `3000` | Puerto del servidor |
| `HOST` | `0.0.0.0` | Interface de escucha |

### 2. Docker

Ideal para producción. Imagen optimizada multi-stage (~50MB).

```bash
# Construir y ejecutar
docker compose up -d

# Ver logs
docker compose logs -f

# Detener
docker compose down
```

O manualmente:

```bash
docker build -t nexopay-pitch .
docker run -d -p 3000:3000 --name nexopay-pitch nexopay-pitch
```

### 3. Nginx (Proxy Reverso)

Para producción con SSL/TLS. Copia la configuración incluida:

```bash
# Compilar archivos estáticos
npm run build

# Copiar al directorio web
sudo mkdir -p /var/www/nexopay-pitch
sudo cp -r public/* /var/www/nexopay-pitch/

# Instalar configuración nginx
sudo cp nginx.conf /etc/nginx/sites-available/nexopay
sudo ln -s /etc/nginx/sites-available/nexopay /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Para SSL con Let's Encrypt:

```bash
sudo certbot --nginx -d nexopay.com -d www.nexopay.com
```

### 4. Plataformas Cloud

#### Render / Railway / Fly.io

Estas plataformas detectan automáticamente el `Dockerfile`:

```bash
# Render
render deploy

# Railway
railway up

# Fly.io
fly launch
fly deploy
```

#### Vercel / Netlify (Estático)

Para despliegue estático sin servidor Node.js:

```bash
npm run build
# Subir el directorio /public
```

En Vercel: Directorio de salida → `public`  
En Netlify: Publish directory → `public`

#### AWS (EC2 + ALB)

```bash
# En la instancia EC2
git clone <repo-url>
cd nexopay-pitch
npm install && npm run build
PORT=3000 npm start

# Configurar ALB apuntando al puerto 3000
# Configurar certificado ACM para HTTPS
```

## Estructura del Proyecto

```
nexopay-pitch/
├── css/
│   └── styles.css          # Sistema de diseño completo
├── img/                     # Imágenes (vacío, para uso futuro)
├── public/                  # Archivos compilados (generado por build)
├── scripts/
│   └── build.js             # Script de compilación
├── index.html               # Landing page principal
├── 01-resumen-ejecutivo.html
├── 02-analisis-mercado.html
├── 03-problema-solucion.html
├── 04-modelo-negocio.html
├── 05-tecnologia.html
├── 06-regulatorio-legal.html
├── 07-analisis-competitivo.html
├── 08-proyecciones-financieras.html
├── 09-hoja-de-ruta.html
├── 10-propuesta-inversion.html
├── 404.html                 # Página de error personalizada
├── favicon.svg              # Favicon del sitio
├── robots.txt               # Directivas para crawlers
├── sitemap.xml              # Mapa del sitio para SEO
├── server.js                # Servidor Express
├── package.json             # Dependencias Node.js
├── Dockerfile               # Imagen Docker multi-stage
├── docker-compose.yml       # Orquestación con Docker Compose
├── nginx.conf               # Configuración para Nginx
└── README.md                # Este archivo
```

## Seguridad

El servidor incluye:

- **Helmet.js** — Headers de seguridad HTTP (CSP, X-Frame-Options, etc.)
- **Compresión gzip** — Reduce el tamaño de transferencia
- **Cache headers** — Assets estáticos con cache inmutable de 1 año
- **Content Security Policy** — Restricción de orígenes permitidos

## Personalización

Para modificar el dominio en producción, actualizar:

1. `nginx.conf` → `server_name`
2. `sitemap.xml` → URLs base
3. `robots.txt` → URL del sitemap

---

**© 2026 NexoPay. Documento confidencial para inversionistas.**
