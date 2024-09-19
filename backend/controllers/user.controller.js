const UserModel = require("../models/user.model");

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