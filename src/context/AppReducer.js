const contratos = (state, action) => {
  switch (action.type) {
    case "GET_CONTRATOS":
      return {
        ...state,

        contratos: action.payload,
      };

    default:
      return state;
  }
};

export default contratos;
