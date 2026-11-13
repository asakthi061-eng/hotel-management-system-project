
import { Routes, Route, Navigate } from "react-router-dom";

import HotelListPage from "../pages/HotelListPage";
import HotelDetailsPage from "../pages/HotelDetailsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/hotels" replace />}
      />

      <Route
        path="/hotels"
        element={<HotelListPage />}
      />

      <Route
        path="/hotels/:id"
        element={<HotelDetailsPage />}
      />

      <Route
        path="*"
        element={<Navigate to="/hotels" replace />}
      />
    </Routes>
  );
}

export default AppRoutes;
