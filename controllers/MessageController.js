const { StatusCodes } = require("http-status-codes");
const ContactMessage = require("../utils/CompanyMessage")
const {company_email} = require("../utils/important")


//This sends message to the comapny
const SendCompanyMessage = async(req,res) =>{
 const {firstname,lastname,email,phone,message} = req.body;
  if(!firstname || !lastname || !email || !phone || !message){
    res.status(StatusCodes.BAD_REQUEST).json({msg:"some fields are empty"})
  }
  const receive = company_email() 
  ContactMessage({
    receiver:receive,//the company's email message goes here
    sender:email, //the senders email message
    message:message // the message itself 
  })
  res.status(StatusCodes.OK).json({msg:"Message has been sent succesfully"})
}

module.exports = SendCompanyMessage