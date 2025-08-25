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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginCard />} />
        <Route path="/menu/*" element={<Menu4 />}>
          <Route path="progActividad" element={<Submenu />} />
          <Route path="organigramas" element={<SubOrganigrama />} />
          <Route path="rqPersonal" element={<SubRQpersonal />} />
          <Route path="candidatos" element={<SubCandidatos />} />
          <Route path="verificaPostulante" element={<SubVerificaPost />} />
          <Route path="datosPostulante" element={<SubDataPostulante />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} />*/}
        <Route />
      </Routes>
    </Router>
  );
}
