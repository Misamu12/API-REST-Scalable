const express = require("express");
const axios = require("axios")
// Gestion de route
const routes = express.Router()


// Creer un utilisateur
routes.put("/new-user" , async (req , res) => { // async parce que on fait des routes a l'exterieure
   try{
    // Si tout se passe bien...
    await axios.put(`${process.env.API_URL}/users`, req.body);
    res.json({message : "Utilisateur ajouter avec succes !!!"})
    
   } catch(err){
     console.log("erreur" , err);
     res.json({message : `une erreur s'est produit`})

     
   }
})


// Liste de utilisateur 
routes.get("/get-user" , async (req , res) => { // async parce que on fait des routes a l'exterieure
   try{
    // Si tout se passe bien...
    const data = await axios.get(`${process.env.API_URL}/users`, req.body);
    res.json(data)
    
   } catch(err){
     console.log("erreur" , err);
     res.json({message : `une erreur s'est produit`})

     
   }
})

// Recupere envoyer la liste utilisateur
routes.post("/new-user" , async (req , res) => { // async parce que on fait des routes a l'exterieure
   try{
    // Si tout se passe bien...
    await axios.post(`${process.env.API_URL}/users`, req.body);
    res.json({message : "Utilisateur ajouter avec succes !!!"})
    
   } catch(err){
     console.log("erreur" , err);
     res.json({message : `une erreur s'est produit`})
     
   }
})

module.exports = routes