const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.createUser = async (req, res) => {
    try
    {
        const user = await UserModel.create(
            {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,

            }
        );
        res.status(200).json({user});
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports.getAllUser = async (req, res) => {
    try
    {
        const users = await UserModel.find();
        res.status(200).json(users);
    }
    catch(err)
    {
        console.log(err);
    }
}
module.exports.getOneUser = async (req, res) => {
    const user = await  UserModel.findById(req.params.id);
    res.status(200).json(user);
}
module.exports.updateUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    const updatedUser = await UserModel.findByIdAndUpdate(
        user,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedUser);
}
module.exports.deleteUser = async (req, res) => {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "L'utilisateur " + req.params.id + " a bien été supprimé."});
}

module.exports.login = async (req, res) => {
    try 
    {
        // Vérification de l'existence de l'utilisateur
        const user = await UserModel.findOne({ email: req.body.email });
        if(!user)
        {
            return res.status(400).json({message: "Utilisateur introuvable"});
        }
        // Vérification du mot de passe
        const verifPassword = await bcrypt.compare(req.body.password, user.password);
        if(!verifPassword)
        {
            return res.status(400).json({message: "Mot de passe incorrect"});
        }
        const token = jwt.sign(
            {id: user._id},
            process.env.TOKEN_JWT,
            { expiresIn: '1h' }
        );
        res.json({ token });
    }
    catch (error)
    {
        console.log(error);
        res.status(500).json({ message: 'Erreur serveur.'});
    }
}