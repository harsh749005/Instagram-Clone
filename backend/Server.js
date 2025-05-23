const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");


const userModel = require("./models/usermodel");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    res.send("Hey this is server");
})

app.post("/signup",async (req,res)=>{
    const {username,email,password,fullname}= req.body;
    let user = await userModel.create({
        username,
        fullname,
        password,
        email
    });

    res.status(200).json({message:"Success",user});
})


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})