const express = require('express');
const cors = require('cors');
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

// Escuchar en el puerto 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
