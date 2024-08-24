#!/bin/bash

# Verificar si estamos en el directorio del proyecto
echo "Creando la carpeta public y el archivo index.html..."

# Crear la carpeta public si no existe
mkdir -p public

# Crear el archivo index.html dentro de la carpeta public
cat <<EOL > public/index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lotería App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
EOL

# Confirmar que el archivo fue creado exitosamente
echo "La carpeta public y el archivo index.html han sido creados exitosamente."
