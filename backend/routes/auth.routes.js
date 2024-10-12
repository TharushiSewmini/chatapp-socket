const express = require("express");
const { signUp, login, logOut } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/signup", signUp )

router.post("/login" , login)

router.post("/logout" , logOut)

module.exports = router;