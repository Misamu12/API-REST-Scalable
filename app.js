require("dotenv").config();

const express = require("express");
const routes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 2006;

// Methode : GET , POST  , DELETE , POST , PUT , PATCH


// MIDDLEWARES (equibaut a un hook comme en react )typt use,  etc... , veut dire si la chose ne se passe pas tu reste la
app.use("/api", routes) 
app.use(express.json());

// En express { Callback : S'excute epres une ecoute d'une donner }.
app.get("/", (req, res) => {
  res.status(200).send("Bienvenue sur notre API Scalable")
});
// Recupere de donneer (Grace a un middleware)
app.post("/new-produit", (req , res)=>{
    
  try{
    //DECOMPOSER LES ELEMENT FRONT
    const data = req.body;
    res.json({message : 'ok' , data }); 
 
   } catch(err){
     console.log(err);
     res.json({message : "une erreur s'est produit"}).status(500)
    
   }
 });



// Demarer le serveur 
app.listen(port, () => {
  console.log(`Oui j'ecoute sur le PORT : ${port}`);
});
