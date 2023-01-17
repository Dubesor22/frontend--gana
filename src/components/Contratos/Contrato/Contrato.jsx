import React, { useContext, useEffect } from "react";

import { GlobalContext } from "../../../context/GlobalState";

const Contrato = () => {
  const { contratos, getContratos } = useContext(GlobalContext);

  useEffect(() => {
    getContratos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contrato = contratos.map((contrato) => {
    console.log(contrato);
    return (
      <div className="contrato" key={contrato._id}>
        <p>{contrato.nombre}</p>
        <p>{contrato.apellido1}</p>
        <p>{contrato.apellido2}</p>
        <p>{contrato.documento}</p>
      </div>
    );
  });

  return <>{contrato}</>;
};

export default Contrato;
