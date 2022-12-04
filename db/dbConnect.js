const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


const connection = async() =>{
    try {
       await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log("an error occured with the database connection");
    }
    
}

module.exports = connection