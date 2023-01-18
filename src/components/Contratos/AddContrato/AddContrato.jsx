import React, { useState, useContext, useEffect } from "react";
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

  useEffect(() => {
    if (formData.cp.length === 5) {
      fetch(`http://localhost:8080/localidades/${formData.cp}`)
        .then((response) => response.json())
        .then((data) =>
          setFormData({ ...formData, localidad: data[0].municipio_nombre })
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.cp]);

  return (
    <>
      <div className="container d-flex justify-content-start">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <AiOutlineFileAdd />
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="exampleModalLabel"
                data-bs-dismiss="modal"
              >
                Añadir Contrato
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
                    title="introduce 8 numeros y una letra"
                    placeholder="introduce 8 numeros y una letra"
                    type="text"
                    onChange={handleChange}
                    name="documento"
                    className="form-control"
                    value={formData ? formData.documento : ""}
                    pattern="^\d{8}[a-zA-Z]$"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Código Postal</label>
                  <input
                    placeholder="Max. 5 digitos"
                    className="form-control"
                    type="text"
                    value={formData ? formData.cp : ""}
                    onChange={handleChange}
                    name="cp"
                    required
                    minLength="5"
                    maxLength="5"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Localidad</label>
                  <input
                    type="text"
                    name="localidad"
                    className="form-control"
                    value={formData ? formData.localidad : ""}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Telefono</label>
                  <input
                    type="number"
                    onChange={handleChange}
                    name="telefono"
                    className="form-control"
                    value={formData ? formData.telefono : ""}
                    required
                    minLength="9"
                    maxLength="13"
                  />
                </div>
                <div className="d-flex justify-content-evenly">
                  <button
                    type="button"
                    className="btn btn-secondary"
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
