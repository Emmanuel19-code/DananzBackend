const contact = require("../utils/sendMail")

const ContactMessage = ({
  receiver,sender,message
}) =>{
  return contact({
    to:receiver,
    from:sender,
    html:message
  })
}


module.exports = ContactMessage