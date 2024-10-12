const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String , 
        required : true
    },
    gender : {
        type : String,
        required : true,
        enum : ['male', 'female']
    },
    profilePic : {
        type : String,
        default : ""
    }

},{
    timestamps : true
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;