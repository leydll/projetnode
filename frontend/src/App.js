import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./components/Connexion";
import Register from "./components/Inscription";
import EventList from "./components/ListeEvenement";
import EventCreate from "./components/CreationEvenement";
import InterfaceAdmin from "./components/Adminvue";
import MesReservations from "./components/Reservations";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    alert("Déconnexion réussie !");
    navigate("/");
  };

  return (
    <div className="app-container">
      {/* Colonne gauche – Navbar */}
      <div className="navbar">
        <h2>Menu</h2>
        <Link to="/">Accueil</Link>
        {!token && <Link to="/login">Connexion</Link>}
        {!token && <Link to="/register">Inscription</Link>}
        {token && role === "user" && (
          <Link to="/reservations">Mes réservations</Link>
        )}
        {token && role === "admin" && (
          <>
            <Link to="/admin">Interface admin</Link>
            <Link to="/admin/create">Créer un événement</Link>
          </>
        )}
      </div>

      {/* Colonne centrale – Contenu dynamique */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {token && role === "user" && (
            <Route path="/reservations" element={<MesReservations />} />
          )}
          {token && role === "admin" && (
            <>
              <Route path="/admin" element={<InterfaceAdmin />} />
              <Route path="/admin/create" element={<EventCreate />} />
            </>
          )}
        </Routes>
      </div>

      {/* Colonne droite – Déconnexion */}
      {token && (
        <div className="logout-section">
          <button className="logout-button" onClick={handleLogout}>
            Déconnexion
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
