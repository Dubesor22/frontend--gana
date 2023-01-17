import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { AiOutlineFileAdd } from "react-icons/ai";

const AddContrato = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido1: "",
    apellido2: "",
    documento: "",
    cp: "",
    localidad: "",
    telefono: "",
  });

  const { addContrato } = useContext(GlobalContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addContrato(formData);
    setFormData({
      nombre: "",
      apellido1: "",
      apellido2: "",
      documento: "",
      cp: "",
      localidad: "",
      telefono: "",
    });
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
          <AiOutlineFileAdd />
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
              <h1
                class="modal-title fs-5"
                id="exampleModalLabel"
                data-bs-dismiss="modal"
              >
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
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="nombre"
                    className="form-control"
                    value={formData ? formData.nombre : ""}
                    required
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
                    required
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
                    required
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
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">C.P.</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="cp"
                    className="form-control"
                    value={formData ? formData.cp : ""}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Localidad</label>
                  <input
                    type="text"
                    name="localidad"
                    className="form-control"
                    value={formData ? formData.localidad : ""}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Telefono</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="telefono"
                    className="form-control"
                    value={formData ? formData.telefono : ""}
                    required
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
                    Registrar
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
