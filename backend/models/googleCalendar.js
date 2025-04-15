const { google } = require("googleapis");
const path = require("path");

const authGoogle = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "../identifiants.json"),
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const CALENDAR_ID = "dllo.leila@gmail.com";

// ajouter un événement dans Google Calendar
async function ajouterEvenementCalendrier(evenement) {
  try {
    const calendar = google.calendar({
      version: "v3",
      auth: await authGoogle.getClient(),
    });

    const response = await calendar.events.insert({
      calendarId: CALENDAR_ID,
      requestBody: {
        summary: evenement.title,
        location: evenement.location,
        start: {
          dateTime: new Date(evenement.datetime).toISOString(),
        },
        end: {
          dateTime: new Date(
            new Date(evenement.datetime).getTime() + 3600000
          ).toISOString(),
        },
      },
    });

    console.log(" Événement ajouté :", response.data.htmlLink);
  } catch (error) {
    console.error(" ERREUR Google Calendar :", error.message);
    console.error("Détail :", error.errors || error.response?.data || error);
  }
}

// lister les événements
async function listerEvenements() {
  const calendar = google.calendar({
    version: "v3",
    auth: await authGoogle.getClient(),
  });

  const res = await calendar.events.list({
    calendarId: CALENDAR_ID,
    timeMin: new Date().toISOString(),
    maxResults: 5,
    singleEvents: true,
    orderBy: "startTime",
  });

  console.log(" Événements à venir :");
  res.data.items.forEach((e) =>
    console.log(`→ ${e.summary} à ${e.location} le ${e.start.dateTime}`)
  );
}

// export des deux fonctions
module.exports = {
  ajouterEvenementCalendrier,
  listerEvenements,
};
