import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginCard from "./components/LoginCard";
import Menu4 from "./pages/Menu4";
import Submenu from "./pages/Submenu";
import SubOrganigrama from "./pages/SubOrganigrama";
import SubRQpersonal from "./pages/SubRQpersonal";
import SubCandidatos from "./pages/SubCandidatos";
import SubVerificaPost from "./pages/SubVerificaPost";
import SubDataPostulante from "./pages/SubDataPostulante";
import PrivateRoute from "./context/PrivateRoute";
import { useData } from "./context/DataProvider";

export default function App() {
  const { data } = useData();

  const componentsMap = {
    Submenu,
    SubOrganigrama,
    SubRQpersonal,
    SubCandidatos,
    SubVerificaPost,
    SubDataPostulante,
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginCard />} />
        <Route
          path="/menu/*"
          element={
            <PrivateRoute>
              <Menu4 />
            </PrivateRoute>
          }
        >
          {data
            .filter((val) => val.split("|")[2] != "")
            .map((row) => {
              const [path, _, componentName] = row.split("|");
              const Component = componentsMap[componentName];
              return (
                <Route
                  key={path}
                  path={`${path}-repo`}
                  element={<Component />}
                />
              );
            })}
        </Route>
        <Route />
      </Routes>
    </Router>
  );
}
