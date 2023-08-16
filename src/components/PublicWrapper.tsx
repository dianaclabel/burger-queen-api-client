import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth";

export const PublicWrapper = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    switch (user.role) {
      case "Mesero/a":
        return <Navigate to="/waiter/menu" />;

      case "Jefe de cocina":
        return <Navigate to="/kitchen" />;

      case "Admin":
        return <Navigate to="/admin" />;
    }
  }

  return <Outlet />;
};
