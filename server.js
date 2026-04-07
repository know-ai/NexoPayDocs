const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.use(compression());

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["'self'"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

app.use((req, res, next) => {
  if (req.path.endsWith('.html')) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
  } else if (req.path.match(/\.(css|js|svg|png|jpg|jpeg|gif|ico|woff2?)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
  next();
});

app.use(express.static(path.join(__dirname, 'public'), {
  extensions: ['html'],
  index: 'index.html',
}));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`\n  ╔══════════════════════════════════════════════╗`);
  console.log(`  ║  NexoPay — Documentación para Inversionistas ║`);
  console.log(`  ╠══════════════════════════════════════════════╣`);
  console.log(`  ║  Servidor activo en:                         ║`);
  console.log(`  ║  → http://${HOST}:${PORT}                      ║`);
  console.log(`  ║  → http://localhost:${PORT}                    ║`);
  console.log(`  ╚══════════════════════════════════════════════╝\n`);
});
