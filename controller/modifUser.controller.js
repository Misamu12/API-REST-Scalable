const axios = require("axios");

module.exports = UserModif = {
    UserModif : async (req , res) => { // async parce que on fait des routes a l'exterieure
   try{

     const {id} = req.params;
    // Si tout se passe bien...
    await axios.put(`${process.env.API_URL}/users/${id}`, req.body);
    res.json({message : "Utilisateur modifier avec succes !!!"})
    
     if(r?.data !== undefined && r?.data !== null) { // verifie si l'utilisateur existe
      return res.json(r.data);

    }

   } catch(err){
     console.log("erreur : " , err);
     res.json({message : `une erreur s'est produit`})

   }
 }
}