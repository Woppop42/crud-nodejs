// Fichier du modèle de nos posts en BDD

const mongoose = require("mongoose");

// Modele d'un post contenant un message, un auteur et des likers. Les tables sont des objets JS
const postSchema = mongoose.Schema(
    {
        message: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        likers: {
            type: [String],
            
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        }
    },
    // Utilisation de la date lors de la création d'un post
    // {
    //     timestamps: true,
    // }
);

// Exporte notre modèle vers la BDD sous le nom de post (premier argument de la méthode)
module.exports = mongoose.model('post', postSchema);