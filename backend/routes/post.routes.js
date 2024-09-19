const express = require("express");
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost } = require("../controllers/post.controller");
const router = express.Router();

// Création d'une route. Prend en paramètre une requête ainsi qu'une réponse. Si réponse il y a, son contenu est renvoyé en json. Ici, le get précise le protocole (get / post / delete etc)
router.get("/", getPosts);
router.post("/post", setPosts);
router.put("/edit/:id", editPost);
router.delete("/delete/:id", deletePost);
router.patch("/like-post/:id", likePost);
router.patch("/dislike-post/:id", dislikePost);

module.exports = router;