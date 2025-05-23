const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const bcrypt = require("bcrypt");

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
            res.status(200).json({message:"Success",user,status:"user created"});
            
        })
    })

})


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})