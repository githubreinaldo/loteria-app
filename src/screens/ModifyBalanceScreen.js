import React, { useState } from 'react';

const ModifyBalanceScreen = () => {
  const [saldo, setSaldo] = useState(100);

  const handleAumento = () => {
    setSaldo(saldo + 10);
  };

  const handleDisminucion = () => {
    setSaldo(saldo - 10);
  };

  return (
    <div>
      <h1>Modificar Saldo</h1>
      <p>Saldo actual: $\{saldo}</p>
      <button onClick={handleAumento}>Aumentar Saldo</button>
      <button onClick={handleDisminucion}>Disminuir Saldo</button>
    </div>
  );
};

export default ModifyBalanceScreen;
