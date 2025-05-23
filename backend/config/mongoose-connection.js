const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/InstaClone")
.then(()=>{
    console.log("Connected to DB");
}).catch((error)=>{
    console.log("Connection Fail",error);
})

module.exports = mongoose;