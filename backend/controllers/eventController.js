const db = require("../models/db");
const {
  ajouterEvenementCalendrier,
  listerEvenements,
} = require("../models/googleCalendar");
const { envoyerSMS } = require("../models/twilio");

// créer un événement (admin)
exports.creerEvenement = (req, res) => {
  const { titre, lieu, dateheure, capacite } = req.body;

  db.query(
    "INSERT INTO evenements (title, location, datetime, capacity, available_seats) VALUES (?, ?, ?, ?, ?)",
    [titre, lieu, dateheure, capacite, capacite],
    (erreur, resultat) => {
      if (erreur) return res.status(500).json(erreur);
      res.status(201).json({ id_evenement: resultat.insertId });
    }
  );
};

// voir tous les événements (public)
exports.afficherEvenements = (req, res) => {
  db.query("SELECT * FROM evenements", (erreur, evenements) => {
    if (erreur) return res.status(500).json(erreur);
    res.json(evenements);
  });
};

// réserver un événement (user)
exports.reserverEvenement = (req, res) => {
  const id_evenement = req.params.id;
  const id_utilisateur = req.utilisateur.id;
  const io = req.app.get("socketio");

  db.query(
    "SELECT * FROM evenements WHERE id_evenement = ?",
    [id_evenement],
    async (err, resultats) => {
      if (err || resultats.length === 0) {
        return res.status(404).json({ message: "Événement introuvable." });
      }

      const evenement = resultats[0];

      if (evenement.available_seats <= 0) {
        return res.status(409).json({ message: "Plus de places disponibles." });
      }

      db.query(
        "INSERT INTO reservations (id_user, id_evenement) VALUES (?, ?)",
        [id_utilisateur, id_evenement],
        async (erreur) => {
          if (erreur) return res.status(500).json(erreur);

          db.query(
            "UPDATE evenements SET available_seats = available_seats - 1 WHERE id_evenement = ?",
            [id_evenement]
          );

          // ajouter à google Calendar
          try {
            await ajouterEvenementCalendrier(evenement);
            await listerEvenements();
          } catch (e) {
            console.error(" Erreur Google Calendar :", e);
          }

          // envoyer un mess
          try {
            await envoyerSMS(evenement);
          } catch (e) {
            console.error(" Erreur Twilio :", e);
          }

          // notification en temps réel
          io.emit("reservationEffectuee", { id_evenement });

          res.status(201).json({ message: "Réservation confirmée !" });
        }
      );
    }
  );
};

// voir ses réservations (user connecté)
exports.voirMesReservations = (req, res) => {
  const id_utilisateur = req.utilisateur.id;

  db.query(
    `SELECT e.title, e.location, e.datetime
     FROM reservations r
     JOIN evenements e ON r.id_evenement = e.id_evenement
     WHERE r.id_user = ?
     ORDER BY e.datetime DESC`,
    [id_utilisateur],
    (err, resultats) => {
      if (err) return res.status(500).json(err);
      res.json(resultats);
    }
  );
};

// supprimer un événement (admin)
exports.supprimerEvenement = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM evenements WHERE id_evenement = ?", [id], (erreur) => {
    if (erreur)
      return res.status(500).json({ message: "Erreur lors de la suppression" });

    res.json({ message: "Événement supprimé avec succès" });
  });
};
