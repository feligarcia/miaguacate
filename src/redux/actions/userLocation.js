import axios from "axios";
import { keygoogle } from "../../keys/keys.js";
import { types } from "../types/types.js";

export const locationAsincrono = () => {
  return (dispatch) => {
    if (navigator.geolocation) {
      //check if geolocation is available
      navigator.geolocation.getCurrentPosition(function (position) {
        axios
          .get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${keygoogle}`
          )
          .then((resp) => {
            console.log(resp);
            dispatch(locationSincro(resp.data.results[5].formatted_address));
          });
      });
    }
  };
};

export const locationSincro = (place) => {
  return {
    type: types.location,
    payload: place,
  };
};
