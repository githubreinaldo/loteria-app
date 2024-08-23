#!/bin/bash

# Verificar si estamos en el directorio correcto
echo "Sincronizando el repositorio local con GitHub..."

# Agregar todos los cambios locales al stage de Git
git add .

# Hacer commit con un mensaje por defecto
git commit -m "Sincronizando cambios locales con GitHub"

# Hacer push de los cambios a la rama principal (main) en GitHub
git push origin main

# Verificar si el push fue exitoso
if [ $? -eq 0 ]; then
  echo "Sincronización completada exitosamente."
else
  echo "Error al sincronizar. Por favor, verifica si tienes permisos o conflictos."
fi

