const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodeMailerConfig');
const {company_email} = require("../utils/important")

const sender = company_email();
const sendEmail = async ({ to, subject, html }) => {
 
  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from:`Danz ${sender}`, // the company's email address goes here
    to,
    subject,
    html,
  });
};





module.exports = sendEmail
