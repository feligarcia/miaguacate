import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Registro from "../components/Registro";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loader from "../components/Loader";
import { PrivateRoutes } from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { ListRoutes } from "./ListRoutes";
import NavIni from "../components/NavIni";
import NavUser from "../components/NavUser";

const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLogin(true);
        const { uid, displayName, photoURL } = user;
        const sesion = { uid, displayName, photoURL };
        localStorage.setItem("usermiaguacate", JSON.stringify(sesion));
      } else {
        setIsLogin(false);
        localStorage.removeItem("usermiaguacate");
      }
      setChecking(false);
    });
  }, [setChecking, setIsLogin]);

  if (checking) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <PrivateRoutes isAuthenticated={isLogin}>
                <ListRoutes />
              </PrivateRoutes>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoutes isAuthenticated={isLogin}>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path="/registro"
            element={
              <PublicRoutes isAuthenticated={isLogin}>
                <Registro />
              </PublicRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
  );
};

export default AppRouter;
