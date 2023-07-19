import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/login/LoginPage";
import HomeAdmin from "./components/admin/HomeAdmin";
// import { Dashboard } from "./components/pages/dashboard/Dashboard";

function App() {
  return (
    <div className="font-inter">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/homeAdmin" element={<HomeAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
