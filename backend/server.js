// backend/server.js

const express = require('express');
const cors = require('cors');
const app = express();
const apiRoutes = require('./routes/api');

// Middleware
app.use(cors());
app.use(express.json());

// Usar las rutas de la API
app.use('/api', apiRoutes);

// Escuchar en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
