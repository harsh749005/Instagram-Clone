const mongoose = require('../config/mongoose-connection');



const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true,
    },
    email:String,
    password:String,
    username:String,
})

module.exports = mongoose.model("user",userSchema);