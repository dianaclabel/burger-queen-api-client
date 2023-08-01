import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomeAdmin } from "./components/admin/HomeAdmin";
import { Trabajadores } from "./components/admin/Trabajadores";
import { Desayunos } from "./components/admin/Desayunos";
import { AlmuerzosAdmin } from "./components/admin/AlmuerzosAdmin";
import { PedidosAdmin } from "./components/admin/PedidosAdmin";
import { LoginPage } from "./components/login/LoginPage";
import { MenuPage } from "./components/waiter/menu/MenuPage";
import { OrdersPage } from "./components/waiter/orders/OrdersPage";
import { AuthContextProvider } from "./context/auth";
import { WaiterLayout } from "./components/waiter/WaiterLayout";
import { PrivateWrapper } from "./components/PrivateWrapper";
// import { Dashboard } from "./components/pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <AuthContextProvider>
        <div className="font-inter">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              {/* Rutas para el mesero */}
              <Route element={<PrivateWrapper />}>
                <Route path="/waiter" element={<WaiterLayout />}>
                  {/* Redirige al path especificado en este caso ir a menu en caso de solo sea /waiter  */}
                  <Route path="" element={<Navigate to="/waiter/menu" />} />
                  <Route path="menu" element={<MenuPage />} />
                  <Route path="orders" element={<OrdersPage />} />
                </Route>
              </Route>
              <Route path="/admin">
                <Route path="" element={<HomeAdmin />} />
                <Route path="trabajadores" element={<Trabajadores />} />
                <Route path="desayunos" element={<Desayunos />} />
                <Route path="almuerzos" element={<AlmuerzosAdmin />} />
                <Route path="pedidos" element={<PedidosAdmin />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </AuthContextProvider>
    </>
  );
}

export default App;
