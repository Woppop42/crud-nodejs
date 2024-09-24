const express = require("express");
const { createUser, getAllUser, getOneUser, updateUser, deleteUser, login } = require("../controllers/user.controller");
const router = express.Router();

router.post("/createUser", createUser);
router.get("/getAllUser", getAllUser);
router.get("/showUser/:id", getOneUser);
router.put("/edit/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
router.post("/login", login);

module.exports = router;