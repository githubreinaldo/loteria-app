import React, { useState } from 'react';

const ModifyBalanceScreen = () => {
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleModifyBalance = async () => {
    if (!userId || !amount) {
      setMessage('Por favor, ingrese el ID del usuario y el monto.');
      return;
    }

    try {
      const response = await fetch('/api/modify-balance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, amount }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Saldo modificado con éxito.');
      } else {
        setMessage('Error al modificar el saldo.');
      }
    } catch (error) {
      setMessage('Error al conectar con el servidor.');
    }
  };

  return (
    <div>
      <h3>Modificar Saldo de Usuario</h3>
      <input
        type="text"
        placeholder="ID del Usuario"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleModifyBalance}>Modificar Saldo</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ModifyBalanceScreen;

