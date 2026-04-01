const axios = require("axios");

module.exports = UserDelete = {
    UserDelete : async (req , res) => { // async parce que on fait des routes a l'exterieure
   try{

     const {id} = req.params;
    // Si tout se passe bien...
    await axios.delete(`${process.env.API_URL}/users/${id}`, req.body);
    res.json({message : "Utilisateur supprimer avec succes !!!"})
    

   } catch(err){
     console.log("erreur : " , err);
     res.json({message : `une erreur s'est produit`})

   }
 }
}