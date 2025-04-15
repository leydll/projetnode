// Importation des modules nécessaires
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const app = express();
const server = http.createServer(app); // création du serveur HTTP

// Configuration de socket.io pour le temps réel
const io = new Server(server, {
  cors: { origin: "http://localhost:3000" },
});

app.use(cors()); // autorise les requêtes entre domaines
app.use(express.json()); // convertit les requêtes JSON en objets JS
app.use("/api/authentification", authRoutes);
app.use("/api/evenements", eventRoutes);

// socket.io : connexion WebSocket
io.on("connection", (socket) => {
  console.log("Client connecté via WebSocket :", socket.id);
});

// permet d'utiliser io ailleurs dans l'app
app.set("socketio", io);

server.listen(process.env.PORT || 5000, () => {
  console.log(`✅ Serveur démarré sur le port ${process.env.PORT}`);
});
