
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const { generateTokenSetCoockie } = require("../utils/generateToken");

const signUp = async (req, res) => {  
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;

    if (password !== confirmpassword) {
      return res
        .status(400)
        .json({ message: "Password and Confirm Password should be the same" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname : fullname,
      username : username,
      password: hashedPassword,  // Use hashed password here
      gender : gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

  if(newUser){
    await newUser.save();
    //generateTokenSetCoockie(newUser._id , res )
    res.status(201).json({ message: "User created successfully", newUser });
  }
  else{
    res.status(400).json({message :"Invalid user data"})
  }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};


const login = async (req, res) => {
 try {
  const {username , password} = req.body;
  const user = await User.findOne({ username });
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!user || !isPasswordMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  generateTokenSetCoockie(user._id, res);
  res.status(200).json({ message: "Login successful"  , user  });
 } catch (error) {
  res.status(400).json({message :"Error" , error})
 }
};



const logOut = async (req, res) => {
try {
  res.cookie("jwt" , "" , {maxAge : 0})
  res.json({ message: "Logout user" });
} catch (error) {
  res.status(400).json({message :"Error" , error})
}
};

module.exports = { login, signUp, logOut };
