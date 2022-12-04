const mongoose = require("mongoose")

const subscriberSchema =new mongoose.Schema({
    email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ]
  },
  createdAt:{
    type:Date,
    default:Date.now()
  }
},{timestamps:true})


module.exports = mongoose.model("subscribers",subscriberSchema)