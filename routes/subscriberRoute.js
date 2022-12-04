const express = require("express");
const SendCompanyMessage = require("../controllers/MessageController");
const  subscription = require("../controllers/subscriber");
const router = express.Router();



router.post("/subscribe", subscription)
router.post("/contactUs-Message",SendCompanyMessage)


module.exports = router