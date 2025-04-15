const express = require("express");
const {
  creerEvenement,
  afficherEvenements,
  reserverEvenement,
  voirMesReservations,
  supprimerEvenement,
} = require("../controllers/eventController");

const { authentifier, autoriser } = require("../auth");
const routeur = express.Router();

routeur.post("/", authentifier, autoriser("admin"), creerEvenement);
routeur.get("/", afficherEvenements);
routeur.post("/:id/reserver", authentifier, reserverEvenement);
routeur.get("/reservations", authentifier, voirMesReservations);
routeur.delete("/:id", authentifier, autoriser("admin"), supprimerEvenement);

module.exports = routeur;
