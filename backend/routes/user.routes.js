const express = require("express");
const { createUser, getAllUser, getOneUser, updateUser, deleteUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/createUser", createUser);
router.get("/getAllUser", getAllUser);
router.get("/showUser/:id", getOneUser);
router.put("/edit/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;