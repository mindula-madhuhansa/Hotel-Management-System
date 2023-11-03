import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import RoomTypesPage from "./pages/RoomTypesPage";
import ReservationsPage from "./pages/ReservationPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/room-types" element={<RoomTypesPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
