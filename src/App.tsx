import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/login/LoginPage";
import { MenuPage } from "./components/waiter/menu/MenuPage";
import { OrdersPage } from "./components/waiter/orders/OrdersPage";
import { AuthContextProvider } from "./context/auth";
import { WaiterLayout } from "./components/waiter/WaiterLayout";
import { PrivateWrapper } from "./components/PrivateWrapper";
// import { Dashboard } from "./components/pages/dashboard/Dashboard";

function App() {
  return (
    <AuthContextProvider>
      <div className="font-inter">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/login" element={<LoginPage />} />

            <Route element={<PrivateWrapper />}>
              {/* Rutas para el mesero */}
              <Route path="/waiter" element={<WaiterLayout />}>
                {/* Redirige al path especificado en este caso ira menu en caso de solo sea /waiter  */}
                <Route path="" element={<Navigate to="/waiter/menu" />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path="orders" element={<OrdersPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
