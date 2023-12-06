import { useState } from 'react';
import './App.css';
import { BaseColaboradores } from './assets/baseColaboradores';
import Listado from './assets/components/Listado';
import Formulario from './assets/components/Formulario';
import Alert from './assets/components/Alert'; 
import BusquedaColaboradores from './assets/components/Buscador';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    if (
      nuevoColaborador.nombre === '' ||
      nuevoColaborador.correo === '' ||
      nuevoColaborador.edad === '' ||
      nuevoColaborador.cargo === '' ||
      nuevoColaborador.telefono === ''
    ) {
      setMensaje('Todos los campos son requeridos.'); 
    } else {
      setColaboradores([...colaboradores, nuevoColaborador]);
      setMensaje('Colaborador agregado exitosamente.');
    }
  };

  const eliminarColaborador = (id) => {
    const nuevaLista = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevaLista);
  };

  return (
    <div className="App">
      <h1>Listado de Colaboradores</h1>
      <Formulario agregarColaborador={agregarColaborador} />
      {mensaje && <Alert mensaje={mensaje} tipo={mensaje.includes('éxito') ? 'danger' : 'success'} />}
      <BusquedaColaboradores colaboradores={BaseColaboradores} setColaboradores={setColaboradores} />
      <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
    </div>
  );
}

export default App;