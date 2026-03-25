const axios = require("axios");

module.exports = GetOneUser = {
    GetUser : async (req , res) => {
  // Pour recuperer l'ID ( Parametre )
 try{
    const {id} = req.params; /** estructure : const {id} = req.params */

    // Verifie, Si tout se passe bien...
    const r = await axios.get(`${process.env.API_URL}/users/${id}`, req.body);

    if(r?.data !== undefined && r?.data !== null) { // verifie si l'utilisateur existe
      return res.json(r.data);

    }
     
   } catch(err){
     console.log("Bref... Attention => " , err);
     return res.json("Aucun utilisateur trouver");
    
   }
}
}