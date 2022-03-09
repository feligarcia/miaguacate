import { types } from "../types/types";

const initialState = {
  roadmap: 0,
  usertype: 0,
  search: "",
  lgShow: false,
  location: "",
  useruid: "",
  simulacion: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.search:
      return { ...state, search: action.payload };
    case types.setSimulacion:
      return { ...state, simulacion: action.payload };

    case types.mostrarModal:
      return {
        ...state,
        lgShow: action.payload,
      };

    default:
      return state;
  }
};
