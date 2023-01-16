import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Formulario.css";

const Formulario = () => {
  return (
    <>
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca su nombre"
              required
            />
            <Form.Label>Apellido 1</Form.Label>
            <Form.Control type="text" placeholder="Primer apellido" required />
            <Form.Label>Apellido 2</Form.Label>
            <Form.Control type="text" placeholder="Segundo apellido" required />
            <Form.Label>Documento (NIF, DNI, CIF)</Form.Label>
            <Form.Control type="text" placeholder="Documento" required />
            <Form.Label>CP</Form.Label>
            <Form.Control type="number" placeholder="Código postal" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Formulario;
