const mongoose = require("mongoose");



const MessageSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,'Please provide your firstname']
    },
    lastname:{
        type:String,
        required:[true,'Please provide your lastname']
    },
    email:{
        type:String,
        required:[true,'Please provide your email']
    },
    phone:{
        type:String,
        required:[true,'Please provide your number']
    },
    message:{
        type:String,
        required:[true,'Please provide your message']
    }
},{timestamps:true})


module.exports = mongoose.model("messages",MessageSchema);