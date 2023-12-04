const mongoose=require("mongoose");
// require("dotenv").config();


const connection=mongoose.connect("mongodb+srv://sandip:bankar@cluster0.fppuxm3.mongodb.net/contact?retryWrites=true&w=majority");

module.exports={connection}