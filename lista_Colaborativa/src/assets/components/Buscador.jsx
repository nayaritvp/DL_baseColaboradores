import React, { useState } from 'react';

const BusquedaColaboradores = ({ colaboradores, setColaboradores }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
    const resultadoBusqueda = colaboradores.filter((colaborador) =>
      Object.values(colaborador).some(
        (value) =>
          value.toString().toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setColaboradores(resultadoBusqueda);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar colaborador..."
        value={busqueda}
        onChange={handleBusqueda}
      />
    </div>
  );
};

export default BusquedaColaboradores;