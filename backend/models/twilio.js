const twilio = require("twilio");
require("dotenv").config();

const clientTwilio = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function envoyerSMS(evenement) {
  await clientTwilio.messages.create({
    body: `Réservation confirmée : ${evenement.title} à ${
      evenement.location
    } le ${new Date(evenement.datetime).toLocaleString()}`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: process.env.TON_NUMERO_PERSO,
  });
}

module.exports = { envoyerSMS };
