import React, { useState } from "react";
import axios from "axios";

function EventCreate() {
  const [form, setForm] = useState({
    titre: "",
    lieu: "",
    dateheure: "",
    capacite: 0,
  });

  const createEvent = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:5003/api/evenements", form, {
        headers: { Authorization: token },
      });

      alert("✅ Événement créé avec succès !");
      setForm({ titre: "", lieu: "", dateheure: "", capacite: 0 });
    } catch (err) {
      alert(err.response?.data?.message || "Erreur lors de la création");
    }
  };

  return (
    <form className="event-create-form" onSubmit={createEvent}>
      <h3>Créer un événement (admin)</h3>
      <input
        placeholder="Titre"
        required
        value={form.titre}
        onChange={(e) => setForm({ ...form, titre: e.target.value })}
      />
      <input
        placeholder="Lieu"
        required
        value={form.lieu}
        onChange={(e) => setForm({ ...form, lieu: e.target.value })}
      />
      <input
        type="datetime-local"
        required
        value={form.dateheure}
        onChange={(e) => setForm({ ...form, dateheure: e.target.value })}
      />
      <input
        type="number"
        placeholder="Capacité"
        required
        value={form.capacite}
        onChange={(e) => setForm({ ...form, capacite: e.target.value })}
      />
      <button>Créer l'événement</button>
    </form>
  );
}

export default EventCreate;
