const mongoose = require('mongoose');


const conversationSchema = new mongoose.Schema({
    participations :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "users" ,
        }
    ] ,

    messages : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "messages" ,
            default : []
        }
    ]

} , {
    timestamps : true
});

const conversationModel = mongoose.model("conversations" , conversationSchema)

module.exports = conversationModel;