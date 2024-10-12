const express = require("express")
const { protectedRoute } = require("../middleware/protectRoute");
const { getUsersForSideBar } = require("../controllers/user.controller");


const router = express.Router()

router.get("/" , protectedRoute , getUsersForSideBar);

module.exports = router;