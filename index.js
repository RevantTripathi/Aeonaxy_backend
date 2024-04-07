const express= require("express")
require("dotenv").config();
const app = express()
const connectDB = require("./config/dbCon");
//connection

connectDB();

app.use(express.json());

app.use("/users", require("./routes/userRoutes"));

app.listen(5000,()=>{
    console.log("Server started")
})


