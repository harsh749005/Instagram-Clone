const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const bcrypt = require("bcrypt");
const {generateToken} = require("./utils/generateToken")
require("dotenv").config();

const userModel = require("./models/usermodel");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173", // replace with your frontend URL
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// protected route
const authMiddleware = require('./middleware/middleware');

app.get("/",authMiddleware,(req,res)=>{
    res.json({
        message: "This is a protected route.",
    });
})

app.post("/signup",async (req,res)=>{
    const {username,email,password,fullname}= req.body;
    let user = await userModel.findOne({email:email});
    if(user) return res.json({message:"You already have an account",status:401});
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt, async(err,hash)=>{
            if(err) return res.send(err.message);
            let user = await userModel.create({
                username,
                fullname,
                password : hash,
                email
            });
            let Token = generateToken(user);
            res.cookie("token",Token);
            res.status(200).json({message:"user created",user,status:"success"});
            
        })
    })

})

app.post("/login",async (req,res)=>{
    const {email,password} = req.body;
    let user = await userModel.findOne({email:email});
    if(!user) return res.json({message:"Incorrect Email or Password",status:"401"});
    bcrypt.compare(password,user.password, function(err,result){
        if(!result) return res.status(401).send("Incorrect Password");
        let Token = generateToken(user);
        res.cookie("token",Token);
        console.log(Token);
        res.status(200).json({message:"login success",user,status:"success"});
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})