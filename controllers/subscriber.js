const subscribers = require ("../models/subscriberModel");
const { StatusCodes } = require('http-status-codes');
const {sendMessageNotification} = require("../utils/SendMessage")



//this functions send message to the use who suscribed

const subscription =async (req,res) =>{
    const {email} = req.body;
     if(!email){
       return res.status(StatusCodes.NO_CONTENT).json({msg:"please try again"})
     }
     const subscribed = await subscribers.findOne({email})
     if(subscribed){
       return res.status(StatusCodes.OK).json({msg:"you have already subscribed"})
     }
    const subscriber = await subscribers.create({email})
    if(!subscriber){
       return res.status(StatusCodes.NO_CONTENT).json({msg:"please try again"})
    }
    sendMessageNotification({
        email:subscriber.email,
        date:subscriber.createdAt
    })
    res.status(StatusCodes.OK).json({msg:"you have subscribed"})
}





module.exports =  subscription