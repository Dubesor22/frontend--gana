const contratos = (state, action) => {
  switch (action.type) {
    case "GET_CONTRATOS":
      return {
        ...state,

        contratos: action.payload,
      };
    case "DELETE_CONTRATO":
      return {
        ...state,
        contratos: state.contratos.filter(
          (contrato) => contrato._id !== action.payload
        ),
      };
    case "ADD_CONTRATO":
      return {
        ...state,
        contratos: [action.payload, ...state.contratos],
      };
    case "GET_CONTRATO":
      return {
        ...state,
        contrato: action.payload,
      };
    default:
      return state;
  }
};

export default contratos;
