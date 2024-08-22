import React, { useState } from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';
import '../styles/styles.css';

const PlayScreen = () => {
  const [numero, setNumero] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleJugada = () => {
    if (numero >= 0 && numero <= 9) {
      setMensaje(`Jugada realizada con el número ${numero}`);
    } else {
      setMensaje("Número inválido. Debe ser entre 0 y 9.");
    }
  };

  return (
    <div>
      <h1>Realizar Jugada</h1>
      <InputField
        type="number"
        min="0"
        max="9"
        placeholder="Selecciona un número"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <Button label="Confirmar Jugada" onClick={handleJugada} />
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default PlayScreen;
