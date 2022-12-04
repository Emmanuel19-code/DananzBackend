const express = require("express");
const app = express();
const Port = 5000 || process.env.PORT;
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize")
const cors = require('cors')
const xss = require('xss-clean')
const connection = require("./db/dbConnect")
const  subscriptionRoute = require("./routes/subscriberRoute")


//middlewares
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())


//database Connection
connection()



//router
app.use("/", subscriptionRoute)

app.get("/",(req,res)=>{
    res.send("hello")
})




app.listen(Port,()=>{
    console.log(`server running on ${Port}`);
})