import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeAdmin } from "./components/admin/HomeAdmin";
import { Trabajadores } from "./components/admin/Trabajadores";
import { Desayunos } from "./components/admin/Desayunos";
import { AlmuerzosAdmin } from "./components/admin/AlmuerzosAdmin";
import { PedidosAdmin } from "./components/admin/PedidosAdmin";
// import { Dashboard } from "./components/pages/dashboard/Dashboard";

function App() {
  return (
    <div className="font-inter">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
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
  );
}

export default App;
