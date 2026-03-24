const axios = require("axios");

module.exports = NewUserController = {
    createNewUser :  async (req , res) => { // async parce que on fait des routes a l'exterieure
   try{
    // Si tout se passe bien...
    await axios.post(`${process.env.API_URL}/users`, req.body);
    res.json({message : "Utilisateur ajouter avec succes !!!"})
    
   } catch(err){
     console.log("erreur" , err);
      console.error("erreur axios : ", err.message);
     res.json({message : `une erreur s'est produit`})

            // Si problème réseau
            if (err.request) {
                return res.status(500).json({
                    message: "Serveur externe indisponible"
                });
            }

            // Autre erreur
            res.status(500).json({
                message: "Erreur interne"
            });
     
   }
}
}