import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth";

export const PrivateWrapper = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/" />;

  return <Outlet />;
};
