import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

function ListeEvenement() {
  const [evenements, setEvenements] = useState([]);

  useEffect(() => {
    // Charger les événements
    axios.get("http://localhost:5003/api/evenements").then((res) => {
      setEvenements(res.data);
    });

    // WebSocket pour mise à jour en temps réel
    const socket = io("http://localhost:5003");

    socket.on("reservationEffectuee", () => {
      axios.get("http://localhost:5003/api/evenements").then((res) => {
        setEvenements(res.data);
      });
    });

    return () => socket.disconnect();
  }, []);

  // Réservation d’un événement
  const reserver = (id_evenement) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Vous devez être connecté pour réserver !");

    axios
      .post(
        `http://localhost:5003/api/evenements/${id_evenement}/reserver`,
        {},
        { headers: { Authorization: token } }
      )
      .then((res) => alert(res.data.message))
      .catch((err) =>
        alert(err.response?.data?.message || "Erreur lors de la réservation")
      );
  };

  return (
    <div className="event-page">
      <h2>Événements disponibles</h2>
      <div className="event-grid">
        {evenements.map((event) => (
          <div className="event-box" key={event.id_evenement}>
            <h3>{event.title}</h3>
            <p>
              📍 {event.location} — 🕒{" "}
              {new Date(event.datetime).toLocaleString()}
            </p>
            <p>🎟️ Places restantes : {event.available_seats}</p>
            <button
              onClick={() => reserver(event.id_evenement)}
              disabled={event.available_seats <= 0}
            >
              Réserver
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListeEvenement;
