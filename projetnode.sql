-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mar. 15 avr. 2025 à 15:54
-- Version du serveur : 8.0.40
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projetnode`
--

-- --------------------------------------------------------

--
-- Structure de la table `evenements`
--

CREATE TABLE `evenements` (
  `id_evenement` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `capacity` int DEFAULT NULL,
  `available_seats` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `evenements`
--

INSERT INTO `evenements` (`id_evenement`, `title`, `location`, `datetime`, `capacity`, `available_seats`) VALUES
(1, 'Concert de Burna Boy', 'Accor Arena - Paris', '2025-05-25 20:00:00', 20000, 19996),
(2, 'Concert de Aya Nakamura', 'Stade Pierre-Mauroy - Lille', '2025-06-05 21:00:00', 50000, 49995),
(3, 'Finale Ligue des Champions', 'Allianz Arena - Munich', '2025-06-01 21:00:00', 75000, 74994),
(4, 'Concert de Travis Scott', 'Paris La Défense Arena', '2025-06-10 20:30:00', 40000, 40000),
(5, 'Concert de SDM', 'Zénith de Paris', '2025-05-20 20:00:00', 6000, 5998),
(6, 'Concert de Tiakola', 'Palais 12 - Bruxelles', '2025-05-30 20:00:00', 18000, 18000),
(7, 'Concert de Gazo', 'Dôme de Marseille', '2025-06-15 20:30:00', 8500, 8500),
(8, 'Concert de Soolking', 'Zénith de Toulouse', '2025-06-08 20:00:00', 9000, 9000),
(9, 'Concert de Ninho', 'Paris La Défense Arena', '2025-06-22 21:00:00', 40000, 39998),
(10, 'Concert de Dadju & Tayc', 'Stade Vélodrome - Marseille', '2025-06-25 21:00:00', 65000, 65000),
(11, 'Match PSG vs OM (Ligue 1)', 'Parc des Princes - Paris', '2025-08-15 20:45:00', 48000, 47999),
(12, 'Match OL vs AS Monaco (Ligue 1)', 'Groupama Stadium - Lyon', '2025-08-17 17:00:00', 59000, 59000),
(13, 'Finale Coupe de France', 'Stade de France - Saint-Denis', '2025-05-24 21:00:00', 81000, 81000),
(14, 'Concert de Jul', 'Stade Vélodrome - Marseille', '2025-07-10 21:00:00', 65000, 64999),
(15, 'Concert de Rihanna', 'Stade de France - Paris', '2025-07-20 21:00:00', 80000, 80000),
(16, 'Concert de The Weeknd', 'Zénith de Strasbourg', '2025-06-12 20:00:00', 12500, 12500),
(17, 'Roland-Garros - Demi-finale Hommes', 'Court Philippe-Chatrier', '2025-06-06 14:00:00', 15000, 14999),
(18, 'Roland-Garros - Finale Femmes', 'Court Philippe-Chatrier', '2025-06-07 15:00:00', 15000, 15000),
(19, 'Match France vs Allemagne (Euro 2024)', 'Olympiastadion - Berlin', '2025-06-14 21:00:00', 74000, 73999),
(20, 'Concert SCH & Hamza', 'Arena de Nanterre', '2025-06-18 21:00:00', 30000, 29999),
(21, 'Concert de Central Cee', 'Zénith de Paris', '2025-06-28 20:00:00', 6800, 6798),
(22, 'Concert de Dinos', 'Zénith de Nantes', '2025-06-29 20:00:00', 9000, 8999),
(24, 'Concert de Orelsan', 'Arena de Bordeaux', '2025-07-02 20:30:00', 11000, 11000),
(26, 'Match Real Madrid vs FC Barcelone', 'Santiago Bernabéu - Madrid', '2025-10-05 21:00:00', 81044, 81044),
(27, 'Concert de Rosalia', 'Stade Jean-Bouin - Paris', '2025-07-06 21:00:00', 18000, 18000),
(28, 'Match Manchester City vs Arsenal', 'Etihad Stadium - Manchester', '2025-09-22 20:30:00', 55000, 55000),
(29, 'Concert de Beyoncé', 'Stade de France - Paris', '2025-07-15 20:30:00', 80000, 79999),
(30, 'Concert de Koba LaD', 'Zénith de Lille', '2025-07-18 20:00:00', 7000, 7000),
(31, 'Concert de Kalash', 'Zénith de Montpellier', '2025-07-20 20:00:00', 7000, 7000),
(32, 'Concert de Tayc & Dadju', 'Zénith de Toulouse', '2025-07-22 20:00:00', 9000, 9000),
(33, 'Finale Wimbledon', 'Centre Court - Londres', '2025-07-13 15:00:00', 15000, 15000),
(34, 'Concert de Black Eyed Peas', 'Accor Arena - Paris', '2025-08-01 20:00:00', 20000, 20000),
(35, 'Concert de Bigflo & Oli', 'Stade Ernest-Wallon - Toulouse', '2025-08-05 21:00:00', 19000, 19000),
(36, 'Concert de Damso', 'Forest National - Bruxelles', '2025-08-08 20:30:00', 8500, 8500),
(37, 'Match OM vs Nice', 'Stade Vélodrome - Marseille', '2025-08-20 20:45:00', 65000, 65000),
(38, 'Concert de Freeze Corleone', 'Zénith de Paris', '2025-08-25 20:00:00', 6800, 6800),
(39, 'Supercoupe d’Europe', 'San Siro - Milan', '2025-08-30 21:00:00', 75000, 75000),
(40, 'Concert de Soolking & Lynda', 'Stade de Genève', '2025-09-03 21:00:00', 30000, 30000),
(41, 'Soirée Stand-up : Paname Comedy Club', 'Paris - République', '2025-07-03 20:00:00', 150, 150),
(42, 'Expo Immersive Van Gogh', 'Atelier des Lumières - Paris', '2025-07-10 18:00:00', 300, 300),
(43, 'Escape Game Géant - Mission Spatiale', 'Toulouse - Cité de l’Espace', '2025-07-12 15:00:00', 100, 98),
(44, 'Soirée Quiz Harry Potter', 'Lille - The Game Bar', '2025-07-15 19:00:00', 80, 80),
(45, 'Festival de la Food Truck', 'Bordeaux - Parc des Expos', '2025-07-18 11:00:00', 500, 500),
(46, 'Atelier Créatif Céramique', 'Montpellier - Atelier Chamotte', '2025-07-20 14:00:00', 25, 25),
(47, 'Nuit des Étoiles', 'Lyon - Observatoire', '2025-08-01 22:00:00', 200, 200),
(48, 'Soirée Karaoké Spécial Années 2000', 'Marseille - Le Dôme Club', '2025-08-02 21:00:00', 120, 120),
(49, 'Marché de Noël d\'été', 'Strasbourg - Place Kléber', '2025-08-05 10:00:00', 1000, 1000),
(50, 'Cinéma en plein air : Inception', 'Toulon - Parc de la Marine', '2025-08-07 21:30:00', 300, 300),
(51, 'Atelier de Pâtisserie avec un Chef', 'Nice - École Lenôtre', '2025-08-10 16:00:00', 20, 19),
(52, 'Tournoi Mario Kart sur écran géant', 'Paris - Meltdown Bar', '2025-08-12 19:00:00', 64, 63),
(53, 'Bal costumé rétro', 'Rennes - La Fabrique', '2025-08-15 20:00:00', 150, 150),
(54, 'Salon du Manga & Cosplay', 'Toulouse - MEETT', '2025-08-17 10:00:00', 2000, 2000),
(55, 'Expo Lego XXL', 'Nantes - Les Machines de l’île', '2025-08-20 11:00:00', 600, 600),
(56, 'Soirée Blind Test Disney', 'Rouen - Le Quiz Bar', '2025-08-21 20:00:00', 100, 100),
(57, 'Atelier DIY : Sacs en tissu', 'Besançon - Maison des Arts', '2025-08-23 14:30:00', 30, 29),
(58, 'Journée médiévale immersive', 'Carcassonne - Cité fortifiée', '2025-08-24 10:00:00', 800, 800),
(59, 'Festival des jeux de société', 'Angers - Centre des Congrès', '2025-08-25 12:00:00', 400, 400),
(62, 'Meet Up avec Aya Nakamura', 'Paris - Champs Elysées', '2025-09-30 14:30:00', 100, 98),
(63, 'Meet Up avec les joueurs du FCB', 'Barcelone', '2025-06-30 16:30:00', 1000, 999),
(64, 'Cours de Pilates gratuit', 'Paris', '2026-05-07 07:30:00', 5, 4);

-- --------------------------------------------------------

--
-- Structure de la table `reservations`
--

CREATE TABLE `reservations` (
  `id_reservation` int NOT NULL,
  `id_user` int DEFAULT NULL,
  `id_evenement` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `reservations`
--

INSERT INTO `reservations` (`id_reservation`, `id_user`, `id_evenement`, `created_at`) VALUES
(1, 8, 1, '2025-04-14 18:12:35'),
(2, 17, 2, '2025-04-14 18:22:43'),
(3, 17, 2, '2025-04-14 18:22:55'),
(4, 13, 1, '2025-04-14 18:58:01'),
(5, 13, 57, '2025-04-15 09:04:47'),
(6, 15, 2, '2025-04-15 09:31:39'),
(7, 15, 3, '2025-04-15 09:31:42'),
(8, 15, 20, '2025-04-15 09:31:46'),
(9, 15, 17, '2025-04-15 09:31:51'),
(10, 15, 29, '2025-04-15 09:32:10'),
(11, 15, 43, '2025-04-15 09:32:20'),
(12, 15, 1, '2025-04-15 09:42:50'),
(13, 15, 9, '2025-04-15 09:52:03'),
(14, 19, 3, '2025-04-15 10:06:51'),
(15, 19, 5, '2025-04-15 10:06:56'),
(16, 19, 9, '2025-04-15 10:07:04'),
(17, 19, 11, '2025-04-15 10:07:09'),
(18, 16, 51, '2025-04-15 10:29:59'),
(19, 16, 3, '2025-04-15 10:37:43'),
(20, 16, 43, '2025-04-15 11:00:09'),
(21, 16, 52, '2025-04-15 11:00:19'),
(22, 16, 1, '2025-04-15 11:02:53'),
(23, 19, 21, '2025-04-15 11:10:07'),
(24, 19, 19, '2025-04-15 11:12:49'),
(25, 19, 2, '2025-04-15 11:13:02'),
(26, 16, 3, '2025-04-15 12:55:45'),
(27, 15, 22, '2025-04-15 13:14:42'),
(28, 15, 21, '2025-04-15 13:14:46'),
(29, 13, 62, '2025-04-15 13:17:22'),
(30, 21, 3, '2025-04-15 13:23:46'),
(31, 21, 2, '2025-04-15 13:23:47'),
(32, 21, 14, '2025-04-15 13:24:07'),
(33, 22, 5, '2025-04-15 13:30:25'),
(34, 22, 3, '2025-04-15 13:30:27'),
(35, 22, 63, '2025-04-15 13:33:27'),
(36, 23, 62, '2025-04-15 13:48:22'),
(37, 23, 64, '2025-04-15 13:50:19');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id_user` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('user','admin') DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_user`, `email`, `password`, `role`) VALUES
(8, 'test@test.com', '$2b$10$10HjekNX9wrzRNGPY6g5nuLONrEhx/QN.b/AJatXDlhF8/X10camy', 'user'),
(13, 'leilo@admin.com', '$2b$10$3U.yhBhbdZcRQNNz/XiFuOcp0xhNLKaEJ.1/yepF/HtbN.ACPN1Nq', 'admin'),
(14, 'marine@admin.com', '$2b$10$mHFbUHRQyGA6S4bdIOner.ItGtEiBGfo4l2fESjp6f/D2btNKChh.', 'admin'),
(15, 'test@gmail.com', '$2b$10$XaSaLAVYH2O7kdg1q9VWq.tFCJKAVht9VSHBWaWQFDv6wlJp74FGe', 'user'),
(16, 'gg@gmail.com', '$2b$10$3vWGpIkHw8jtfYy7OqGzPuftnA06JpSC90HmXcxoieVKcut7E85jq', 'user'),
(17, 'amina@gmail.com', '$2b$10$qVdEzgkPmEmMDgn6RikyuOeM1GyK.tZCfP8VwKp4wZuwI/cMZEajK', 'user'),
(18, 'admin@admin.com', '$2b$10$PkTC7Y8sVKihMVelcAqu8upc.lh0i0QD1o9sncIUlE0wXdc3lvn/K', 'admin'),
(19, 'isma@gmail.com', '$2b$10$opZ7V/vKs3JED9I3ime7Ju1bmNPjityaIx/kS8uv7Rd5miRD7P8Ni', 'user'),
(21, 'jdsjskp@gmail.com', '$2b$10$gC/pq.s0TYcq59MN96RKAud3D3ZXcTRQF46Umhe31iUQb6mNKoRsO', 'user'),
(22, 'bob@gmail.com', '$2b$10$csm3Z8ssrshuYH/.rhyiXekMu9ZZd8YbTi1YvJdGGxafHuXQKIBPW', 'user'),
(23, 'fati@gmail.com', '$2b$10$MOqJf9v4oOnsfuR9Z2D4leIcBM4q89oYTJO734oloQ8THGBGIqN4S', 'user');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `evenements`
--
ALTER TABLE `evenements`
  ADD PRIMARY KEY (`id_evenement`);

--
-- Index pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id_reservation`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_evenement` (`id_evenement`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `evenements`
--
ALTER TABLE `evenements`
  MODIFY `id_evenement` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT pour la table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id_reservation` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`id_evenement`) REFERENCES `evenements` (`id_evenement`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
