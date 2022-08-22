import InventoryDashboardLayout from "./components/Layouts/InventoryDashboardLayout";
import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  SuppliersPage,
  MovementsPage,
  InventoryPage,
  UsersPage,
} from "./pages/InventoryService";
import { HomeClientPage } from "./pages/Client";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeClientPage />} />
        <Route path="/inv" element={<InventoryDashboardLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="proveedores" element={<SuppliersPage />} />
          <Route path="reportes" element={<MovementsPage />} />
          <Route path="inventario" element={<InventoryPage />} />
          <Route path="usuarios" element={<UsersPage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
