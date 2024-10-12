const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participations: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participations: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message
    });

    if(newMessage){
        conversation.messages.push(newMessage._id);
    }
// paralelly do it 
await Promise.all([conversation.save() , newMessage.save()])
    res.status(201).json({ message: "message sent successfully" , newMessage})
  } catch (error) {
    res.status(400).json({ message: "error in sending message", error });
  }
};

const getMessages = async  (req , res) =>{
  try {
    const {id : userToChat} = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participations: {$all : [senderId , userToChat]}
    }).populate("messages")

    if(!conversation) return res.status(200).json([]);

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in get Messages controller : " , error.message);
    res.status(400).json({ message: "error in getting messages", error });
    
  }
}


module.exports = { sendMessage , getMessages};
