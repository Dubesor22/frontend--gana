import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  contratos: [],
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

  return (
    <GlobalContext.Provider
      value={{
        contratos: state.contratos,

        getContratos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const GlobalContext = createContext(initialState);
