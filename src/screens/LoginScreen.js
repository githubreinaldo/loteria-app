import React from 'react';

const LoginScreen = () => {
  return (
    <div>
      <h1>Inicio de Sesión</h1>
      <form>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginScreen;
