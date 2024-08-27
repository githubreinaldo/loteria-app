import React, { useState, useEffect } from 'react';

const UserMainScreen = ({ username }) => {  // Recibimos el nombre de usuario como prop desde App.js
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch(`https://7jtlss-3001.csb.app/api/balance`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username })  // Enviamos el nombre de usuario para obtener el saldo
        });

        const data = await response.json();

        if (response.ok) {
          setBalance(data.balance);  // Establecemos el saldo obtenido
        } else {
          setMessage(`Error: ${data.message}`);
        }
      } catch (error) {
        console.error('Error al obtener el saldo:', error);
        setMessage('Error al conectar con el servidor');
      }
    };

    fetchBalance();
  }, [username]);  // Ejecutar el efecto cuando el nombre de usuario cambie

  return (
    <div>
      <h1>Pantalla Principal de Usuario</h1>
      <p>Nombre de usuario: {username}</p>  {/* Mostrar el nombre de usuario */}
      <p>Saldo: {balance}</p>  {/* Mostrar el saldo */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserMainScreen;
