require("dotenv").config();

const express = require("express");

const app = express();
const port = Number(process.env.PORT) || 2006;

// Methode : GET , POST , DELETE , POST , PUT , PATCH


// En express { Callback : S'excute epres une ecoute d'une donner }.
app.get("/", (request, response) => {
  response.send("Bienvenue sur notre API Scalable");
});

app.get("/health", (request, response) => {
  response.status(200).json({ status: "ok" });
});

// Demarer le serveur 
app.listen(port, () => {
  console.log(`Oui j'ecoute sur le PORT : ${port}`);
});
