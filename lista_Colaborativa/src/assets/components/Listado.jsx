import React from 'react';
import Table from 'react-bootstrap/Table';

const Listado = (props) => {
  const { colaboradores, eliminarColaborador } = props;

  if (!Array.isArray(colaboradores) || typeof eliminarColaborador !== 'function') {
    return null; 
  }

  return (
    <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Edad</th>
                <th>Teléfono</th>
            </tr>
        </thead>
        <tbody>
            {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.telefono}</td>
                <td>{colaborador.estado}</td>
                <td>
                    <button onClick={() => eliminarColaborador(colaborador.id)} className="btn btn-danger">
                        Eliminar
                    </button>
                </td>
            </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default Listado 