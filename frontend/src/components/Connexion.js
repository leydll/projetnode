import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Connexion() {
  const [email, setEmail] = useState("");
  const [motdepasse, setMotdepasse] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5003/api/authentification/connexion",
        { email, motdepasse }
      );
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      alert("Connexion réussie !");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Erreur de connexion");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    alert("Déconnexion réussie !");
    navigate("/");
  };

  const isConnected = localStorage.getItem("token");

  return (
    <div>
      {!isConnected ? (
        <form className="auth-form" onSubmit={handleLogin}>
          <h2>Connexion</h2>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Mot de passe"
            type="password"
            value={motdepasse}
            onChange={(e) => setMotdepasse(e.target.value)}
            required
          />
          <button>Se connecter</button>
        </form>
      ) : (
        <div className="auth-message">
          <p>Vous êtes déjà connecté(e).</p>
          <button onClick={handleLogout}>Se déconnecter</button>
        </div>
      )}
    </div>
  );
}

export default Connexion;
