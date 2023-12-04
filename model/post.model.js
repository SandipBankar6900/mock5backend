const mongoose=require("mongoose");

const contactSchema=mongoose.Schema({
    name: String,
    email :String,
    phone : String,
    label : String,

},{

    versionKey:false
})

const ContactModel=mongoose.model("contact",contactSchema);

module.exports={
    ContactModel
}