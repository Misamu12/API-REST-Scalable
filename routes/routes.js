const express = require("express");
const axios = require("axios");
const { createNewUser } = require("../controller/newUser.controller");
const { UserLst } = require("../controller/user.controller");
const { UserCreate } = require("../controller/createUser.controller");
// Gestion de route
const routes = express.Router()


routes.put("/mof-user" , UserCreate ); // Creer un utilisateur
routes.get("/get-user" , UserLst );// Liste de utilisateur 
routes.post("/new-user" , createNewUser); // Recupere le donner venant de l'utilisateur


// Routes Dynamique 
routes.get("/get-user/:id" , async (req , res) => {
  // Pour recuperer l'ID ( Parametre )
 try{
    const {id} = req.params; /** estructure : const {id} = req.params */

    // Verifie, Si tout se passe bien...
    const r = await axios.get(`${process.env.API_URL}/users/${id}`, req.body);

    if(r?.data !== undefined && r?.data !== null) { // verifie si l'utilisateur existe
      return res.json(r.data);

    }
 
     return res.json("Aucun utilisateur trouver");
    
   } catch(err){
     console.log("Bref... Attention" , err);
     res.json({message : `une erreur s'est produit !`})
    
   }
})

module.exports = routes