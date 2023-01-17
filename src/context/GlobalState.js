import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  contratos: [],
  contrato: {},
};
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getContratos = async () => {
    const res = await axios.get("http://localhost:8080/contratos");

    dispatch({
      type: "GET_CONTRATOS",

      payload: res.data,
    });
  };

  const deleteContrato = async (_id) => {
    try {
      const res = await axios.delete("http://localhost:8080/contratos/" + _id);

      dispatch({
        type: "DELETE_CONTRATO",
        payload: res.data._id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addContrato = async (contrato) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/contratos/",
        contrato
      );
      dispatch({
        type: "ADD_CONTRATO",
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const getContrato = async (_id) => {
    try {
      const res = await axios.get("http://localhost:8080/contratos/" + _id);

      dispatch({
        type: "GET_CONTRATO",
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const editContrato = async (_id, contrato) => {
    try {
      await axios.put("http://localhost:8080/contratos/" + _id, contrato);
    } catch (err) {
      console.error(err);
    }
  };

  const getLocalidad = async (_cp) => {
    try {
      const res = await axios.get("http://localhost:8080/localidades/" + _cp);
      dispatch({
        type: "GET_LOCALIDAD",
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        contratos: state.contratos,
        contrato: state.contrato,

        getContratos,
        deleteContrato,
        addContrato,
        getContrato,
        editContrato,
        getLocalidad,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const GlobalContext = createContext(initialState);
