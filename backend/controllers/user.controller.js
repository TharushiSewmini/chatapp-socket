const User = require("../models/user.model")

const getUsersForSideBar= async (req,res) =>{
    try {
        const loggedUser = req.user._id
        const filtteredusers = await User.find({_id : { $ne : loggedUser}}).select("-password");

        res.status(200).json(filtteredusers)
    } catch (error) {
        console.error("Error in getting users for side bar" , error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}
module.exports = { getUsersForSideBar}