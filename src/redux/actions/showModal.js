import { types } from "../types/types.js";

export const ShowModal = (movie) => {

  return {
    type: types.mostrarModal,
    payload: true,
  
  };
};

export const CloseModal = () => {
  return {
    type: types.mostrarModal,
    payload: false,
  };
};
