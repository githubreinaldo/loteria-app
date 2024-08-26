#!/bin/bash

# Crear la carpeta public si no existe
echo "Creando carpeta public y archivo index.html..."
mkdir -p public

# Crear el archivo index.html dentro de public
cat > public/index.html <<EOL
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lotería App</title>
</head>
<body>
    <div id="root"></div>
    <script src="../src/index.js"></script>
</body>
</html>
EOL

echo "Archivo public/index.html creado correctamente."

# Modificar el archivo server.js para que apunte a public/index.html
echo "Modificando server.js para servir el archivo index.html desde public..."
SERVER_JS_PATH="backend/server.js"

cat > $SERVER_JS_PATH <<EOL
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const connectDB = require('./config/database');  // Conectar con MongoDB
const apiRoutes = require('./routes/api');

// Conectar a MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Usar las rutas de la API
app.use('/api', apiRoutes);

// Servir archivos estáticos desde public
app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

// Escuchar en el puerto 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(\`Servidor corriendo en el puerto \${PORT}\`);
});
EOL

echo "Archivo server.js modificado correctamente."

# Sincronizar con GitHub
echo "Sincronizando cambios con GitHub..."
git add public/index.html backend/server.js
git commit -m "Crear public/index.html y modificar server.js para servir el frontend"
git push origin main

echo "Sincronización completada."
