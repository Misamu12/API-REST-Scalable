const express = require("express");
// Gestion de route
const routes = express.Router()

routes.post("/new-user" , async (req , res){ // async parce que on fait des routes a l'exterieure
   try{
      
   } catch(err){
     console.log(err);
     res.json({message : "une erreur s'est produit"})
     
   }
})