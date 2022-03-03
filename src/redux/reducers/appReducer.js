import { types } from "../types/types";

const initialState = {
  roadmap:0,
  usertype: 'default',
  search: "",
  lgShow: false,
  location:'',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.search:
      return { ...state, search: action.payload };
    case types.listarpoke:
      return { ...state, favPokemons: action.payload };
    case types.registrarpoke:
      return { ...state, favPokemons: [action.payload] };
    case types.borrarpoke:
      return {
        ...state,
        favPokemons: state.favPokemons.filter(
          (pokefav) => pokefav.id !== action.payload
        ),
      };

      case types.mostrarModal:
        return {
          ...state,
          lgShow: action.payload,
          movie: action.movie
        };
  
      case types.listpokes:
        return { ...state, listpokemons: action.payload };
    default:
      return state;

  }
};
