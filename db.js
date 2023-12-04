const mongoose=require("mongoose");
// require("dotenv").config();


const connection=mongoose.connect("mongodb+srv://sandip:bankar@cluster0.fppuxm3.mongodb.net/Contact-SchedulerApp?retryWrites=true&w=majority");

module.exports={connection}