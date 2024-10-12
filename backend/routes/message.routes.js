const express = require("express")
const { sendMessage , getMessages} = require("../controllers/message.controller");
const { protectedRoute } = require("../middleware/protectRoute");


const router = express.Router()

router.get("/:id" , protectedRoute, getMessages)
router.post("/send/:id" , protectedRoute,sendMessage)

module.exports = router;

