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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFormData(contrato);
  }, [contrato]);

  return (
    <div className="text-start container-md justify-content-center border shadow p-3 mb-5 bg-body-tertiary rounded">
      <form onSubmit={handleSubmit} className="container">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
            value={formData.nombre || ""}
            name="nombre"
            className="form-control"
            required
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
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido2</label>
          <input
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, apellido2: e.target.value })
            }
            value={formData.apellido2 || ""}
            name="apellido2"
            className="form-control"
            required
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
            required
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
            required
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
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Editar contrato
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContrato;
