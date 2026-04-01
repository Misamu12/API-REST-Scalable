require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const app = express();
const port = process.env.PORT || 2006;
const cors = require("cors");

// Methode : GET , POST  , DELETE , POST , PUT , PATCH


// MIDDLEWARES (equibaut a un hook comme en react )typt use,  etc... , veut dire si la chose ne se passe pas tu reste la
app.use(cors({
  origin : "http://127.0.0.1:5500"
})) // Cross-Origin-Ressource-Shared : Ouvrir la voix d'acces aux origins externe
app.use(express.json());
app.use("/api", routes);
// En express { Callback : S'excute epres une ecoute d'une donner }.
let nom = "PTXX"

app.get("/", (req, res) => {
  res.json({nom})
});

// Recupere de donneer (Grace a un middleware)
app.post("/new-produit", (req , res) => {
    
  try{
    //DECOMPOSER LES ELEMENT FRONT
    const data = req.body;
    res.json({message : 'ok' , data }); 
 
   } catch(error){
     console.log(error);
     res.json({message : "une erreur s'est produit : " , error }).status(500)
    
   }
 });



// Demarer le serveur 
app.listen(port, () => {
  console.log(`Oui j'ecoute sur le PORT : ${port}`);
});
