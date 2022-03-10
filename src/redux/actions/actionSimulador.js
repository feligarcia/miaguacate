import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    where,
  } from "firebase/firestore";
  import { db } from "../../keys/firebaseConfig";
  import { types } from "../types/types";
  
  export const listSimulaASIN = (useruid) => {
    return async (dispatch) => {
      const simuBD = collection(db, "simulacionesBD");
      const queri = query(simuBD, where("useruid", "==", useruid));
      const simuBDq = await getDocs(queri);
      const simulacion = [];
      simuBDq.forEach((simu) => {
        simulacion.push({
          ...simu.data(),
        });
      });
  
      dispatch(listSimulasincro(simulacion));
    };
  };
  
  export const listSimulasincro = (simulacion) => {
    return {
      type: types.listarSimulacion,
      payload: simulacion,
    };
  };

  export const setCredito = (credito) => {
    console.log(credito)
    return {
      type: types.setcredito,
      payload: credito,
    };
  };

  export const setSimula = () => {
    return {
      type: types.setSimulacion,
      payload: [
        {
          item: "INVERSION",
          ano0: 0,
          ano1: 0,
          ano2: 0,
          ano3: 0,
          ano4: 0,
          ano5: 0,
        },
        {
          item: "Mano de obra",
          ano0: 3540000,
          ano1: 0,
          ano2: 0,
          ano3: 0,
          ano4: 0,
          ano5: 0,
        },
        {
          item: "Insumos y equipos",
          ano0: 13293500,
          ano1: 0,
          ano2: 0,
          ano3: 0,
          ano4: 0,
          ano5: 0,
        },
        {
          item: "Certificaciones",
          ano0: 20000000,
          ano1: 0,
          ano2: 0,
          ano3: 0,
          ano4: 0,
          ano5: 0,
        },
        {
          item: "INGRESOS",
          ano0: 0,
          ano1: 0,
          ano2: 11600000,
          ano3: 87000000,
          ano4: 87000000,
          ano5: 92800000,
        },
        {
          item: "EGRESOS",
          ano0: 0,
          ano1: 0,
          ano2: 0,
          ano3: 0,
          ano4: 0,
          ano5: 0,
        },
        {
          item: "Mano de obra",
          ano0: 0,
          ano1: 3540000,
          ano2: 4000000,
          ano3: 4680000,
          ano4: 5300000,
          ano5: 4900000,
        },
        {
          item: "Gastos insumos",
          ano0: 0,
          ano1: 3850000,
          ano2: 5700000,
          ano3: 5016000,
          ano4: 4000000,
          ano5: 4984000,
        },
        {
          item: "Gastos Fijos",
          ano0: 0,
          ano1: 13200000,
          ano2: 13750000,
          ano3: 14280000,
          ano4: 14850000,
          ano5: 15450000,
        },
        {
          item: "Gastos de Comercialización",
          ano0: 0,
          ano1: 3400000,
          ano2: 3000000,
          ano3: 3000000,
          ano4: 3000000,
          ano5: 3200000,
        },
        {
          item: "Gastos de administrativos",
          ano0: 0,
          ano1: 64000000,
          ano2: 66000000,
          ano3: 90000000,
          ano4: 93000000,
          ano5: 97000000,
        },
        {
          item: "Gastos CIF",
          ano0: 0,
          ano1: 300000,
          ano2: 312000,
          ano3: 324000,
          ano4: 337000,
          ano5: 350000,
        },
        {
          item: "PRESTAMOS",
          ano0: 0,
          ano1: 0,
          ano2: 0,
          ano3: 0,
          ano4: 0,
          ano5: 0,
        }
        
      ],
    };
  };


  //aqui voy organizando
  export const regisFavASincrono = (poke, useruid) => {
    return async (dispatch) => {
      const FavDB = collection(db, "favPoke");
      const queri = query(
        FavDB,
        where("id", "==", poke.id),
        where("useruid", "==", useruid)
      );
      const FavDBPrev = await getDocs(queri);
      let existe = false;
      FavDBPrev.forEach((pokefav) => {
        existe = true;
      });
      if (!existe) {
        const { nombre, id, foto, experiencia } = poke;
        const newpokefav = { nombre, id, foto, experiencia, useruid: useruid };
  
        addDoc(collection(db, "favPoke"), newpokefav)
          .then((resp) => {
            dispatch(regisFavSicrono(newpokefav));
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
  };
  
  export const regisFavSicrono = (poke) => {
    return {
      type: types.registrarpoke,
      payload: poke,
    };
  };
  
  export const borrarFavASincro = (id, useruid) => {
    return async (dispatch) => {
      const FavDB = collection(db, "favPoke");
      const queri = query(
        FavDB,
        where("id", "==", id),
        where("useruid", "==", useruid)
      );
  
      const FavDBPrev = await getDocs(queri);
      FavDBPrev.forEach((pokefav) => {
        deleteDoc(doc(db, "favPoke", pokefav.id)).then((res) => {
          dispatch(borrarFavSINcrono(id));
        });
      });
    };
  };
  
  export const borrarFavSINcrono = (poke) => {
    return {
      type: types.borrarpoke,
      payload: poke,
    };
  };
  