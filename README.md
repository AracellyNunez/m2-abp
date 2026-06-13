# 🏦 Sky Wallet - Aplicación Bancaria Digital

## Descripción del Proyecto

**Sky Wallet** es una aplicación web de banca digital desarrollada como proyecto académico. Proporciona una interfaz intuitiva para que los usuarios gestionen sus operaciones bancarias básicas, incluyendo autenticación, depósitos, transferencias de dinero y visualización de transacciones.

## Características Principales

✅ **Autenticación de Usuarios** - Sistema de login seguro con validación de credenciales  
✅ **Panel de Control** - Dashboard interactivo que muestra el estado de la cuenta  
✅ **Depósitos** - Funcionalidad para realizar depósitos en la cuenta  
✅ **Transferencias** - Envío de dinero a otros usuarios  
✅ **Historial de Transacciones** - Visualización completa de operaciones realizadas  
✅ **Interfaz Responsiva** - Diseño adaptable a dispositivos móviles y de escritorio  

## Tecnologías Utilizadas

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (Vanilla)
  - Bootstrap 5.3.8

- **Estructura:**
  - Arquitectura basada en páginas HTML estáticas
  - Gestión de eventos con JavaScript puro

## Estructura del Proyecto

```
m2-abp/
├── index.html              # Página de inicio de sesión
├── inicio.html             # Panel principal (dashboard)
├── deposit.html            # Página de depósitos
├── sendmoney.html          # Página de transferencias
├── transaction.html        # Historial de transacciones
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos personalizados
│   ├── img/                # Recursos de imágenes
│   └── js/
│       ├── index.js        # Lógica de login
│       ├── deposit.js      # Lógica de depósitos
│       ├── sendmoney.js    # Lógica de transferencias
│       └── transaction.js  # Lógica de transacciones
└── README.md               # Este archivo
```

## Cómo Usar la Aplicación

### 1. Iniciar Sesión

- Accede a la página de login (`index.html`)
- **Credenciales de prueba:**
  - Email: `abc123@skywallet.com`
  - Contraseña: `Contraseña123`

### 2. Navegación

Una vez autenticado, utiliza el menú de navegación principal para:
- **Inicio** - Ver el resumen de tu cuenta
- **Depósito** - Añadir fondos a tu cuenta
- **Enviar Dinero** - Transferir dinero a otros usuarios
- **Transacciones** - Consultar el historial de operaciones

## Instalación

1. **Clonar o descargar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/m2-abp.git
   cd m2-abp
   ```

2. **Abrir en el navegador:**
   - Simplemente abre el archivo `index.html` en tu navegador web
   - O utiliza un servidor local (recomendado):
     ```bash
     python -m http.server 8000
     # o con Node.js:
     npx http-server
     ```
   - Luego accede a `http://localhost:8000`

## Funcionalidades Detalladas

### Autenticación
- Sistema de login con validación de credenciales
- Almacenamiento temporal de sesión del usuario
- Redirección automática al dashboard tras autenticación exitosa

### Operaciones Bancarias
- Depósitos con validación de montos
- Transferencias entre cuentas
- Registro automático de todas las transacciones
- Visualización del historial con detalles completos

## Notas Importantes

⚠️ **Este es un proyecto académico** con propósitos educativos. Las credenciales están hardcodeadas para demostración.

⚠️ **No utilizar en producción** - No incluye encriptación ni medidas de seguridad reales.


## Datos del Autor

- **Nombre:** Aracelly Núñez
- **Email:** nunezaracelly@gmail.con
- **GitHub:** https://github.com/AracellyNunez
- **Repositorio:** https://github.com/AracellyNunez/m2-abp

---

## Licencia

Este proyecto se entrega como trabajo académico. Todos los derechos reservados.

## Contacto y Soporte

Para consultas o reportar problemas, contacta al autor o crea un issue en el repositorio de GitHub.

---

**Última actualización:** Junio 2026  
**Estado:** Completado para entrega académica
