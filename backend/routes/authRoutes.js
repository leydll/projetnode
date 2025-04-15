const express = require("express");
const { inscription, connexion } = require("../controllers/authController");

const routeur = express.Router();

routeur.post("/inscription", inscription);
routeur.post("/connexion", connexion);

module.exports = routeur;
