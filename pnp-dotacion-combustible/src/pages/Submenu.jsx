import { useLocation } from "react-router-dom";
import { useFetchById } from "../utils/useFetchById";

export default function Submenu() {
  const location = useLocation();
  const cabecera = location.state?.value;

  const { data, loading, error } = useFetchById(
    "/Home/TraerDetalleSubmenu",
    cabecera,
  );

  return (
    <div>
      <h1>Página de Postulante ID: {cabecera} </h1>
      <p>
        Esta es la vista que corresponde a tu action `Menu()` en el controller.
      </p>
      {loading && <p>Cargando datos...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && (
        <pre style={{ background: "#eee", padding: "10px" }}>{data}</pre>
      )}
    </div>
  );
}
