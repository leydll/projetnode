const jwt = require("jsonwebtoken");

exports.authentifier = (req, res, suivant) => {
  const jeton = req.headers.authorization;

  if (!jeton)
    return res.status(401).json({ message: "Authentification requise" });

  jwt.verify(jeton, process.env.JWT_SECRET, (erreur, utilisateur) => {
    if (erreur) return res.status(403).json({ message: "Jeton invalide" });

    req.utilisateur = utilisateur; // ajoute l'utilisateur dans la requête
    suivant(); // continue vers la route
  });
};

// vérifie si l'utilisateur a un rôle spécifique (admin, etc.)
exports.autoriser = (roleAutorise) => {
  return (req, res, suivant) => {
    if (req.utilisateur.role !== roleAutorise) {
      return res.status(403).json({ message: "Accès interdit" });
    }
    suivant(); // si autorisé → on continue
  };
};
