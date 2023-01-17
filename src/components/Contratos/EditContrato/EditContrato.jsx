import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalState";

const EditContrato = () => {
  const { contrato, getContrato, editContrato } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido1: "",
    apellido2: "",
    documento: "",
    cp: "",
    telefono: "",
  });
  const { _id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    editContrato(contrato._id, formData);
    navigate("/");
  };

  useEffect(() => {
    getContrato(_id);
  }, []);

  useEffect(() => {
    setFormData(contrato);
  }, [contrato]);

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3">
        <label className="form-label">nombre</label>
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          value={formData.nombre || ""}
          name="nombre"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Apellido 1</label>
        <input
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, apellido1: e.target.value })
          }
          value={formData.apellido1 || ""}
          name="apellido1"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">apellido2</label>
        <input
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, apellido2: e.target.value })
          }
          value={formData.apellido2 || ""}
          name="apellido2"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">documento</label>
        <input
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, documento: e.target.value })
          }
          value={formData.documento || ""}
          name="documento"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">cp</label>
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, cp: e.target.value })}
          value={formData.cp || ""}
          name="cp"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">telefono</label>
        <input
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, telefono: e.target.value })
          }
          value={formData.telefono || ""}
          name="telefono"
          className="form-control"
        />
      </div>

      <button type="submit">Editar contrato</button>
    </form>
  );
};

export default EditContrato;
