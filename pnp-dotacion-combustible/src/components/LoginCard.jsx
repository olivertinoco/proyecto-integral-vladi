import { useState } from "react";
import { useData } from "../context/DataProvider";
import { useNavigateTo } from "../utils/useNavigateTo";

const LoginCard = () => {
  const { login, error } = useData();
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const navigateTo = useNavigateTo();

  const handleLogin = async () => {
    const result = await login(usuario, clave);
    if (result.ok) {
      navigateTo("/menu");
    } else {
      console.log("Error:", result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Card */}
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm">
        {/* Logo centrado */}
        <div className="flex justify-center mb-6">
          <img src="/Images/logo.jpeg" alt="Logo" className="h-12 w-auto" />
        </div>
        {/* Formulario de login */}
        <div className="space-y-4">
          <div>
            <label
              className="block text-blue-500 text-sm font-medium mb-1"
              htmlFor="email"
            >
              Ingrese Usuario
            </label>
            <input
              id="email"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ingrese su usuario"
            />
          </div>
          <div>
            <label
              className="block text-blue-500 text-sm font-medium mb-1"
              htmlFor="password"
            >
              Ingrese Clave
            </label>
            <input
              id="password"
              type="password"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleLogin();
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ingrese su clave"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
