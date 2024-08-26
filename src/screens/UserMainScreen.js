import React, { useState, useEffect } from 'react';

const UserMainScreen = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/balance');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setBalance(data.balance);
      } catch (error) {
        console.error('Error al obtener el saldo:', error);
        alert(`Error: ${error.message}`);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div>
      <h1>Pantalla Principal de Usuario</h1>
      <p>Saldo: {balance}</p>
    </div>
  );
};

export default UserMainScreen;
