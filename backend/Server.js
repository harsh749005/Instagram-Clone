const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.send("Hey this is server");
})

app.post("/signup",(req,res)=>{
    const {username,email,password,fullname}= req.body;
    console.log(username);
})


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})