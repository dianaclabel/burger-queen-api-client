import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

export const Layout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col min-h-screen">
      {/* El ! después de user indica que el objeto user es no nulo (o sea, user tiene un valor) */}
      <Header role={user!.role} userName={user!.name} />

      {/* //especifica donde renderiza la rutas hijas */}
      <Outlet />

      <div className="mt-auto sticky bottom-0">
        <Nav />
      </div>
    </div>
  );
};
