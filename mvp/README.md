# NexoPay — MVP Prototipo Interactivo

Prototipo de alta fidelidad para la aplicación móvil **NexoPay**, diseñado con principios de **Flutter Material Design 3** y enfoque **mobile-first**.

## Vista Rápida

- **10 pantallas** interactivas navegables
- Diseño **Material Design 3** (Material You)
- Estilo visual **Flutter** nativo
- 100% responsivo — funciona en cualquier dispositivo
- Sin dependencias externas (solo HTML/CSS/JS vanilla)

## Pantallas Incluidas

| # | Pantalla | Descripción |
|---|----------|-------------|
| 0 | **Splash** | Pantalla de carga con logo animado |
| 1 | **Onboarding** | Bienvenida con propuesta de valor |
| 2 | **Login** | Inicio de sesión con biometría y social login |
| 3 | **Home Dashboard** | Balance total, accesos rápidos, transacciones recientes |
| 4 | **Pago Móvil** | Enviar dinero con selector de contacto y banco |
| 5 | **QR Code** | Generar/escanear código QR para pagos |
| 6 | **PoS Virtual** | Punto de Venta virtual para comerciantes |
| 7 | **Historial** | Historial completo de transacciones con filtros |
| 8 | **Perfil** | Configuración, cuentas, seguridad |
| 9 | **Confirmación** | Pago exitoso con recibo digital |

## Cómo Visualizar

### Opción 1: Abrir directamente en el navegador

```bash
# Simplemente abre el archivo en tu navegador
open mvp/index.html          # macOS
xdg-open mvp/index.html      # Linux
start mvp/index.html          # Windows
```

### Opción 2: GitHub Pages (en línea)

Si el repositorio tiene GitHub Pages habilitado, el prototipo estará disponible en:

```
https://know-ai.github.io/NexoPayDocs/mvp/
```

Puedes compartir este enlace directamente con inversionistas y stakeholders.

### Opción 3: Servidor local

```bash
# Con Python
cd mvp && python3 -m http.server 8080

# Con Node.js (npx, sin instalar nada)
npx serve mvp

# Con PHP
cd mvp && php -S localhost:8080
```

## Cómo Compartir con Inversionistas

### Enlace directo
Comparte la URL de GitHub Pages directamente:
```
https://know-ai.github.io/NexoPayDocs/mvp/
```

### Presentación en reunión
1. Abre el enlace en un navegador
2. Usa la barra de botones superior para navegar entre pantallas
3. O haz clic dentro del mockup del teléfono para navegar orgánicamente
4. El splash se auto-avanza al onboarding después de 2.5 segundos

### Exportar como PDF
1. Abre el prototipo en Chrome
2. Navega a cada pantalla y usa `Ctrl+P` / `Cmd+P`
3. Selecciona "Guardar como PDF"
4. Repite para cada pantalla que quieras incluir

## Guía de Diseño

### Sistema de Diseño
- **Framework visual**: Flutter Material Design 3 (Material You)
- **Tipografía**: Roboto (Flutter default) + Inter (headings)
- **Colores primarios**: `#1A56DB` (Primary), `#0891B2` (Secondary)
- **Border radius**: 28px (large), 16px (medium), 12px (small), 8px (extra-small)
- **Elevación**: Sombras suaves siguiendo las guías Material 3

### Paleta de Colores

| Token | Valor | Uso |
|-------|-------|-----|
| Primary | `#1A56DB` | Botones principales, indicadores activos |
| Primary Container | `#D6E4FF` | Fondos de iconos, chips activos |
| Secondary | `#0891B2` | Acentos, elementos secundarios |
| Surface | `#FAFBFF` | Fondo principal de la app |
| Surface Container | `#EDEEF8` | Cards elevadas, inputs |
| On Surface | `#1B1B1F` | Texto principal |
| On Surface Variant | `#44474F` | Texto secundario |
| Success | `#059669` | Indicadores positivos, montos recibidos |
| Error | `#DC2626` | Indicadores negativos, montos enviados |

### Componentes Flutter Simulados
- `Scaffold` con `BottomNavigationBar`
- `AppBar` con estilos Material 3
- `Card` con `elevation` y `borderRadius`
- `ElevatedButton`, `OutlinedButton`, `TextButton`
- `TextField` con `OutlineInputBorder`
- `Chip`, `Badge`, `FloatingActionButton`
- `ListTile` para items de perfil y transacciones

## Migración a Figma

Para migrar este prototipo a Figma:

1. **Estructura de frames**: Crear un frame de 375x812 (iPhone 14) para cada pantalla
2. **Auto Layout**: Usar auto layout en todos los contenedores
3. **Design Tokens**: Importar la paleta de colores como variables de Figma
4. **Componentes**: Crear componentes reutilizables para cards, botones, inputs, nav bar
5. **Prototyping**: Conectar las pantallas con las mismas interacciones del HTML

### Plugin recomendado
- **html.to" design** (Figma plugin): Importa HTML directamente a Figma
- **Material Design 3 Kit** (Figma Community): Base de componentes M3

## Migración a Flutter

El código Flutter equivalente seguiría esta estructura:

```
lib/
├── main.dart
├── theme/
│   └── app_theme.dart          # Material 3 theme con los colores definidos
├── screens/
│   ├── splash_screen.dart
│   ├── onboarding_screen.dart
│   ├── login_screen.dart
│   ├── home_screen.dart
│   ├── pago_movil_screen.dart
│   ├── qr_screen.dart
│   ├── pos_virtual_screen.dart
│   ├── history_screen.dart
│   ├── profile_screen.dart
│   └── success_screen.dart
├── widgets/
│   ├── balance_card.dart
│   ├── transaction_item.dart
│   ├── quick_action_button.dart
│   └── bank_chip.dart
└── models/
    ├── transaction.dart
    ├── bank_account.dart
    └── user.dart
```

---

**© 2026 NexoPay. Prototipo confidencial para inversionistas.**
