const express = require('express');
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();
const port = 8000;

// Connexion du serveur à la bdd 
connectDB();

// permet d'accéder à l'ensemble des méthodes du module express
const app = express();

// Middleware permettant de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use("/prout", require("./routes/post.routes"));
app.use("/user", require("./routes/user.routes"));

app.listen(port, () => console.log("le serveur à démarré au port " + port));