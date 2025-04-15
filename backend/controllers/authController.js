const db = require("../models/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// inscription
exports.inscription = (req, res) => {
  const { email, motdepasse, role } = req.body;

  bcrypt.hash(motdepasse, 10, (erreur, hash) => {
    if (erreur) return res.status(500).json({ message: "Erreur de hachage." });

    db.query(
      "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
      [email, hash, role],
      (erreur) => {
        if (erreur) res.status(500).json(erreur);
        else res.status(201).json({ message: "Inscription réussie." });
      }
    );
  });
};

//connexion
exports.connexion = (req, res) => {
  const { email, motdepasse } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    (erreur, utilisateurs) => {
      if (erreur) return res.status(500).json(erreur);
      if (utilisateurs.length === 0) {
        return res.status(404).json({ message: "Utilisateur introuvable." });
      }

      const utilisateur = utilisateurs[0];

      bcrypt.compare(motdepasse, utilisateur.password, (err, isValid) => {
        if (err || !isValid) {
          return res.status(401).json({ message: "Mot de passe incorrect." });
        }

        const token = jwt.sign(
          { id: utilisateur.id_user, role: utilisateur.role },
          process.env.JWT_SECRET
        );

        res.json({
          token: token,
          role: utilisateur.role,
        });
      });
    }
  );
};
