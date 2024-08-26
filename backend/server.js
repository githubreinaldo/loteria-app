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
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
