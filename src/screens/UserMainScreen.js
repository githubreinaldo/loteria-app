import React, { useState, useEffect } from 'react';

const UserMainScreen = () => {
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchBalance();
  }, []);

  const fetchBalance = async () => {
    try {
      const response = await fetch('/api/balance');
      const data = await response.json();

      if (data.success) {
        setBalance(data.balance);
      } else {
        setMessage('Error al obtener el saldo.');
      }
    } catch (error) {
      setMessage('Error al conectar con el servidor.');
    }
  };

  return (
    <div>
      <h3>Saldo actual: {balance} USD</h3>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserMainScreen;
