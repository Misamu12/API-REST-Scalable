const axios = require("axios");

module.exports = Userlist = {
  UserLst :   async (req , res) => { // async parce que on fait des routes a l'exterieure
  console.log(`API get-user ok !`);

  try{
    // Si tout se passe bien...
    const r = await axios.get(`${process.env.API_URL}/users`, req.body);

    if(r?.data) { // verifie si l'utilisateur existe
      return res.json(r.data);
      
    }

     return res.json("Aucun utilisateur trouver");
    
   } catch(err){
     console.log("Bref... Attention" , err);
     res.json({message : `une erreur s'est produit !`})

     
   }
}
}