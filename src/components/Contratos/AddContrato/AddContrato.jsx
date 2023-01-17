import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";

const AddContrato = () => {
  const [formData, setFormData] = useState({ nombre: "", apellido1: "" });

  const { addContrato } = useContext(GlobalContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addContrato(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="container d-flex justify-content-start">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Añadir Contrato
        </button>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Añadir Contrato
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form className="container" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">nombre</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="nombre"
                    className="form-control"
                    value={formData ? formData.nombre : ""}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Apellido 1</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={formData ? formData.apellido1 : ""}
                    name="apellido1"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Apellido2</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="apellido2"
                    className="form-control"
                    value={formData ? formData.apellido2 : ""}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Documento</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="documento"
                    className="form-control"
                    value={formData ? formData.documento : ""}
                  />
                </div>

                <div class="d-flex justify-content-evenly">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddContrato;
