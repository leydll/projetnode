import React, { useEffect, useState } from "react";
import axios from "axios";

function InterfaceAdmin() {
  const [evenements, setEvenements] = useState([]);
  const [formulaire, setFormulaire] = useState({
    titre: "",
    lieu: "",
    dateheure: "",
    capacite: 0,
  });

  const token = localStorage.getItem("token");

  const chargerEvenements = () => {
    axios.get("http://localhost:5003/api/evenements").then((res) => {
      setEvenements(res.data);
    });
  };

  useEffect(() => {
    chargerEvenements();
  }, []);

  const creerEvenement = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5003/api/evenements", formulaire, {
        headers: { Authorization: token },
      });
      setFormulaire({ titre: "", lieu: "", dateheure: "", capacite: 0 });
      chargerEvenements();
    } catch (err) {
      alert(err.response?.data?.message || "Erreur création événement");
    }
  };

  const supprimerEvenement = async (id) => {
    try {
      await axios.delete(`http://localhost:5003/api/evenements/${id}`, {
        headers: { Authorization: token },
      });
      chargerEvenements();
    } catch (err) {
      alert(err.response?.data?.message || "Erreur suppression événement");
    }
  };

  return (
    <div className="admin-event-list">
      <h2>🛠️ Interface Administrateur</h2>

      <h3>📅 Liste des événements</h3>
      {evenements.map((e) => (
        <div className="admin-event-box" key={e.id_evenement}>
          <p>
            <strong>{e.title}</strong> — {e.location} <br />
            🕒 {new Date(e.datetime).toLocaleString()} <br />
            🎟️ Places restantes : {e.available_seats}
          </p>
          <button onClick={() => supprimerEvenement(e.id_evenement)}>
            🗑 Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}

export default InterfaceAdmin;
