const express = require("express");
const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes");
const userRoutes = require("./routes/user.routes");
const dotenv = require("dotenv");
const coockieParser = require("cookie-parser");
const connectToMongoDb = require("./db/connectToMongoDb");

const app = express();
app.use(express.json());
app.use(coockieParser())
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/" , (req , res)=>{
    res.send("Hello World");
})

app.use("/api/auth" , authRoutes);
app.use("/api/messages" , messageRoutes);
app.use("/api/users" , userRoutes);
app.listen(PORT  , ()=>{
    connectToMongoDb();
    console.log("Server is running on port number" , PORT); 
})


