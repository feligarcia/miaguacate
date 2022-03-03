import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import Home from "../containers/Home";

export const ListRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Loader />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
