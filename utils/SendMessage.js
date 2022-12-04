const sendEmail = require('../utils/sendMail');


const sendMessageNotification = async ({
  email,
  date,
}) => {
  
  return sendEmail({
    to: email,
    subject: 'Email Confirmation',
    html: `<h4>Thank you for subscriping to Danaz Interior</h4>
     You have subscribed to receive  updates from our respective organization
     on ${date}
    `,
  });
};




module.exports = {
  sendMessageNotification,
};