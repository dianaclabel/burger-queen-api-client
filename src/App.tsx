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
import { NewOrderContextProvider } from "./context/newOrder";
import { Layout } from "./components/waiter/Layout";
import { PrivateWrapper } from "./components/PrivateWrapper";
import { Toaster } from "react-hot-toast";
import { PublicWrapper } from "./components/PublicWrapper";
import { KitchenPage } from "./components/kitchen/KitchenPage";

function App() {
  return (
    <>
      <Toaster position="bottom-center" />
      <AuthContextProvider>
        <NewOrderContextProvider>
          <div className="font-inter">
            <BrowserRouter>
              <Routes>
                <Route element={<PublicWrapper />}>
                  <Route path="/login" element={<LoginPage />} />
                </Route>
                {/* Rutas para el mesero */}
                <Route element={<PrivateWrapper />}>
                  <Route path="/waiter" element={<Layout />}>
                    {/* Redirige al path especificado en este caso ir a menu en caso de solo sea /waiter  */}
                    <Route path="" element={<Navigate to="/waiter/menu" />} />
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="orders" element={<OrdersPage />} />
                  </Route>
                  <Route path="/kitchen" element={<Layout />}>
                    <Route path="" element={<KitchenPage />} />
                  </Route>
                  <Route path="/admin">
                    <Route path="" element={<HomeAdmin />} />
                    <Route path="trabajadores" element={<Trabajadores />} />
                    <Route path="desayunos" element={<Desayunos />} />
                    <Route path="almuerzos" element={<AlmuerzosAdmin />} />
                    <Route path="pedidos" element={<PedidosAdmin />} />
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </NewOrderContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
