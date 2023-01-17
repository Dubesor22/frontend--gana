import React from "react";
import Contrato from "./Contrato/Contrato";
import AddContrato from "./AddContrato/AddContrato";
import Cp from "./Cp/Cp";

const Contratos = () => {
  return (
    <>
      <div className="container">
        <AddContrato />
        <br />
        <div className="container justify-content-center border shadow p-3 mb-5 bg-body-tertiary rounded">
          <Contrato />
        </div>
      </div>
      <Cp />
    </>
  );
};

export default Contratos;
