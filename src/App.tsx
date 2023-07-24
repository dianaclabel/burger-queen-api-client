import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/login/LoginPage";
import { MenuPage } from "./components/waiter/menu/MenuPage";
import { OrdersPage } from "./components/waiter/orders/OrdersPage";
// import { Dashboard } from "./components/pages/dashboard/Dashboard";

function App() {
  return (
    <div className="font-inter">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/waiter/menu" element={<MenuPage />} />
          <Route path="/waiter/orders" element={<OrdersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
