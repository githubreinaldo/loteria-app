# Lotería App

Este es un proyecto de una aplicación de lotería simple para Android e iPhone que incluye funcionalidades para usuarios y administradores.

## Funcionalidades principales

### Para usuarios:
- Realizar jugadas con números del 0 al 9.
- Ver el historial de jugadas.
- Ver los resultados ganadores de los últimos 10 días.
- Ver el saldo disponible.

### Para administradores:
- Limitar la cantidad de jugadas por número.
- Ver estadísticas de jugadas.
- Ingresar los resultados ganadores.
- Modificar el saldo de los usuarios.

## Estructura del proyecto
- **src/components/**: Componentes reutilizables (botones, formularios, listas).
- **src/screens/**: Pantallas principales para usuarios y administradores.
- **src/styles/**: Hoja de estilos global.
- **src/api.js**: Simulación de una API para manejar jugadas, historial y saldo.

## Scripts importantes
- **create_structure.sh**: Crea la estructura inicial de carpetas y archivos.
- **apply_styles.sh**: Aplica estilos a las pantallas y componentes.
- **create_reusable_components.sh**: Crea componentes reutilizables.

## Cómo ejecutar el proyecto
1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Ejecuta la aplicación con `npm start`.

