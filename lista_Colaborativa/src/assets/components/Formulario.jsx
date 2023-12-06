/*import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Formulario = ({ agregarColaborador }) => {
  const initialState = {
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  };

  const [nuevoColaborador, setNuevoColaborador] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nuevoColaborador.nombre === '' ||
      nuevoColaborador.correo === '' ||
      nuevoColaborador.edad === '' ||
      nuevoColaborador.cargo === '' ||
      nuevoColaborador.telefono === ''
    ) {
      alert('Todos los campos son requeridos.');
      return;
    }

    agregarColaborador(nuevoColaborador);
    setNuevoColaborador(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
        <div className="mb-3">
      <input
        type="text"
        placeholder="Nombre del colaborador"
        name="nombre"
        value={nuevoColaborador.nombre}
        onChange={handleChange}
      />
      </div>
      <div className="mb-3">
      <input
        type="email"
        placeholder="Email del colaborador"
        name="correo"
        value={nuevoColaborador.correo}
        onChange={handleChange}
      />
      </div>
      <div className="mb-3">
      <input
        type="text"
        placeholder="Edad del colaborador"
        name="edad"
        value={nuevoColaborador.edad}
        onChange={handleChange}
      />
      </div>
      <div className="mb-3">
      <input
        type="text"
        placeholder="Cargo del colaborador"
        name="cargo"
        value={nuevoColaborador.cargo}
        onChange={handleChange}
      />
      </div>
      <div className="mb-3">
      <input
        type="text"
        placeholder="Telefono del colaborador"
        name="telefono"
        value={nuevoColaborador.telefono}
        onChange={handleChange}
      />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Agregar Colaborador</button>
    </form>
  );
};

export default Formulario;*/

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = ({ agregarColaborador }) => {
  const initialState = {
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  };

  const [nuevoColaborador, setNuevoColaborador] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const value of Object.values(nuevoColaborador)) {
      if (value.trim() === '') {
        alert('Todos los campos son requeridos.');
        return;
      }
    }

    agregarColaborador(nuevoColaborador);
    setNuevoColaborador(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Nombre del colaborador"
          name="nombre"
          value={nuevoColaborador.nombre}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email del colaborador"
          name="correo"
          value={nuevoColaborador.correo}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Edad del colaborador"
          name="edad"
          value={nuevoColaborador.edad}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Cargo del colaborador"
          name="cargo"
          value={nuevoColaborador.cargo}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Teléfono del colaborador"
          name="telefono"
          value={nuevoColaborador.telefono}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Agregar Colaborador</button>
    </form>
  );
};

export default Formulario;