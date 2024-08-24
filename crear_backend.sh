#!/bin/bash

# Crear la carpeta backend
echo "Creando la carpeta backend..."
mkdir -p backend

# Navegar a la carpeta backend
cd backend

# Inicializar un proyecto Node.js
echo "Inicializando el proyecto Node.js..."
npm init -y

# Instalar las dependencias necesarias
echo "Instalando las dependencias necesarias (express, mongoose, cors)..."
npm install express mongoose cors

# Crear las subcarpetas necesarias
echo "Creando las subcarpetas dentro de backend..."
mkdir -p routes models controllers config

# Volver al directorio raíz del proyecto
cd ..

echo "Estructura básica del backend creada y dependencias instaladas."
