import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/login/LoginPage";
// import { Dashboard } from "./components/pages/dashboard/Dashboard";

function App() {
  return (
    <div className="font-inter">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
