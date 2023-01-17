import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { Link } from "react-router-dom";

const Contrato = () => {
  const { contratos, getContratos, deleteContrato } = useContext(GlobalContext);

  const handleDelete = (_id) => {
    deleteContrato(_id);
  };

  useEffect(() => {
    getContratos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contrato = contratos.map((contrato) => {
    return (
      <div className="contrato" key={contrato._id}>
        <table className="table container">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido 1</th>
              <th scope="col">Apellido 2</th>
              <th scope="col">Documento</th>
              <th scope="col">C.P.</th>
              <th scope="col">Localidad</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{contrato.nombre}</td>
              <td>{contrato.apellido1}</td>
              <td>{contrato.apellido2}</td>
              <td>{contrato.documento}</td>
              <td>{contrato.cp}</td>
              <td>{contrato.localidad}</td>
              <td>{contrato.telefono}</td>
              <td>
                <button type="button" className="btn-primary btn-sm">
                  <Link to={"/contrato/" + contrato._id}>Editar</Link>
                </button>
                &nbsp; &nbsp;
                <button
                  onClick={() => handleDelete(contrato._id)}
                  type="button"
                  className="btn btn-primary btn-sm"
                >
                  Borrar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  });

  return <>{contrato}</>;
};

export default Contrato;
