// Fichier de controller contenant les méthodes de gestion de nos modèles.

const PostModel = require("../models/post.model");

// Utilisation de module.exports directement pendant la définition de la méthode. Permet de ne pas oublier l'export.
module.exports.setPosts = async (req, res) => {

    // Si le body de la requete ne contient pas de message, on renvoi un message d'erreur.
    if(!req.body.message)
    {
        res.status(400).json({ message: "Merci d'ajouter un message."});
    }

    // Création de l'objet post sur le schéma de notre modèle
    const post = await PostModel.create({
        message: req.body.message,
        author : req.body.author
    });
    // La réponse de notre requête avec le détail de l'objet post créé précédemment
    res.status(200).json(post);
};

// Méthode permettant d'afficher tous les posts stockés en BDD grâce .find()
module.exports.getPosts = async (req, res) => {
    const posts = await PostModel.find();
    res.status(200).json(posts);
}

module.exports.deletePost = async (req, res) => {
    const postToDelete = await PostModel.findByIdAndDelete(req.params.id);
    res.status(200).json({message : "Le post " + req.params.id + " a bien été supprimé."});
}

module.exports.editPost = async (req, res) => {
    const post = await PostModel.findById(req.params.id);
    if(!post)
    {
        res.status(400).json({message: "Le post n'a pas été trouvé."});
    }
    // Modification du post avec la méthode findByIdAndUpdate qui prend en parametre le post a mdofié, le body de la requete, et la permission de la modification de l'objet
    const updatePost = await PostModel.findByIdAndUpdate(
    post,
    req.body,
    {new: true})
    res.status(200).json(updatePost);
}

module.exports.likePost = async (req, res) => {
    try
    {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            // addToSet permet d'ajouter un élément à un champ de l'objet post. Ici, l'id de l'user qui a liké le post.
            {$addToSet: {likers: req.body.userId}},
            {new: true})
        res.status(200).json({message: req.body.userId + " a liké le post " + req.params.id});  
    }
    catch (err)
    {
        res.status(400).json(err);
    }
}
module.exports.dislikePost = async (req, res) => {
    try
    {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            // addToSet permet d'ajouter un élément à un champ de l'objet post. Ici, l'id de l'user qui a liké le post.
            {$pull: {likers: req.body.userId}},
            {new: true})
        res.status(200).json({message: req.body.userId + " ne like plus le post " + req.params.id});  
    }
    catch (err)
    {
        res.status(400).json(err);
    }
}