const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodeMailerConfig');




const contact = async ({to,from,html}) =>{
  const transporter = nodemailer.createTransport(nodemailerConfig);
  return transporter.sendMail({
     from,
     to,
     subject:"ASSISTANCE",
     html
  })
}

module.exports = contact