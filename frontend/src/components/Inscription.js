import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Inscription() {
  const [email, setEmail] = useState("");
  const [motdepasse, setMotdepasse] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5003/api/authentification/inscription",
        {
          email,
          motdepasse,
          role,
        }
      );
      alert("Inscription réussie !");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Erreur à l'inscription");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleRegister}>
      <h2>Inscription</h2>
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
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">Utilisateur</option>
        <option value="admin">Admin</option>
      </select>
      <button>S'inscrire</button>
    </form>
  );
}

export default Inscription;
