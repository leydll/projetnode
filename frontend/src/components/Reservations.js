import { useEffect, useState } from "react";
import axios from "axios";

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5003/api/evenements/reservations", {
        headers: { Authorization: token },
      })
      .then((res) => setReservations(res.data))
      .catch((err) => {
        console.error(err);
        setErreur("Impossible de charger les réservations");
      });
  }, []);

  return (
    <div className="reservation-page">
      <h2>Mes réservations</h2>
      {erreur && <p className="error">{erreur}</p>}
      {reservations.length === 0 ? (
        <p style={{ textAlign: "center" }}>Vous n'avez encore rien réservé.</p>
      ) : (
        reservations.map((r, i) => (
          <div className="reservation-box" key={i}>
            <h4>{r.title}</h4>
            <p>📍 {r.location}</p>
            <p>🕒 {new Date(r.datetime).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Reservations;
