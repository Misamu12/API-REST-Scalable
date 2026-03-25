const axios = require("axios");

module.exports = CreateUser = {
    UserCreate : async (req , res) => { // async parce que on fait des routes a l'exterieure
   try{
    // Si tout se passe bien...
    await axios.put(`${process.env.API_URL}/users`, req.body);
    res.json({message : "Utilisateur ajouter avec succes !!!"})
    
   } catch(err){
     console.log("erreur" , err);
     res.json({message : `une erreur s'est produit`})

     
   }
 }
}