const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const bcrypt = require("bcrypt");
const {generateToken} = require("./utils/generateToken")

const userModel = require("./models/usermodel");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    res.send("Hey this is server");
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
            const Token = generateToken(user);
            res.cookie("Token",Token);
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
        const Token = generateToken(user);
        res.cookie("Token",Token);
        console.log(Token);
        res.status(200).json({message:"login success",user,status:"success"});
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})