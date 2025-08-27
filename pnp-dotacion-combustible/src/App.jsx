import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginCard from "./components/LoginCard";
import Menu4 from "./pages/Menu4";
import Submenu from "./pages/Submenu";
import SubOrganigrama from "./pages/SubOrganigrama";
import SubRQpersonal from "./pages/SubRQpersonal";
import SubCandidatos from "./pages/SubCandidatos";
import SubVerificaPost from "./pages/SubVerificaPost";
import SubDataPostulante from "./pages/SubDataPostulante";

export default function App() {
  const subComponents = {
    1102: Submenu,
    "0401": SubOrganigrama,
    1004: SubRQpersonal,
    "0104": SubCandidatos,
    "0106": SubVerificaPost,
    "0108": SubDataPostulante,
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginCard />} />
        <Route path="/menu/*" element={<Menu4 />}>
          {Object.entries(subComponents).map(([path, component]) => (
            <Route
              key={path}
              path={`${path}-repo`}
              element={React.createElement(component)}
            />
          ))}
        </Route>
        <Route />
      </Routes>
    </Router>
  );
}
