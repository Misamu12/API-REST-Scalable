const express = require("express");
const axios = require("axios");
const { createNewUser } = require("../controller/newUser.controller");
const { UserLst } = require("../controller/user.controller");
const { UserCreate } = require("../controller/createUser.controller");
const getOneUserController = require("../controller/getOneUser.controller");


// Gestion de route
const routes = express.Router()


routes.put("/mof-user" , UserCreate ); // Creer un utilisateur
routes.get("/get-user" , UserLst );// Liste de utilisateur 
routes.post("/new-user" , createNewUser); // Recupere le donner venant de l'utilisateur
routes.get("/get-user/:id" , getOneUserController.GetUser ) // Routes Dynamique 


module.exports = routes

