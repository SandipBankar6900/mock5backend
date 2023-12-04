const express=require("express");
const { ContactModel}=require("../model/post.model");

const contactRouter=express.Router();



contactRouter.post("/create",async(req,res)=>{
    const {name,email,phone,label}=req.body

    try {
        const contact=new ContactModel({name,email,phone,label});
        await contact.save();
        res.status(200).send({"msg":"A new contact has been added"})
        
    } catch (error) {
        res.status(400).send({"err":"error"})
        
    }
})



contactRouter.get("/",async(req,res)=>{
    try {
        const contact=await ContactModel.find({name:req.body.name})
        res.status(200).send(contact)
    } catch (error) {
        res.status(400).send({"err":"error"}) 
    }
})


contactRouter.patch("/update/:contactId",async(req,res)=>{

    const {contactId}=req.params;

    const contact=await ContactModel.findOne({_id:contactId})

    try {
        if(req.body.name===contact.name)
        {
            await ContactModel.findByIdAndUpdate({_id:contactId},req.body)
            res.status(200).send({"msg":`The contact with id ${contactId} has been updated`})

        }
        
    } catch (error) {
        res.status(400).send({"err":"error"})
        
    }
})


contactRouter.delete("/delete/:contactId",async(req,res)=>{

    const {contactId}=req.params;

    const contact=await ContactModel.findOne({_id:contactId})

    try {
        if(req.body.name===contact.name)
        {
            await ContactModel.findByIdAndDelete({_id:contactId})
            res.status(200).send({"msg":`The contact with id ${contactId} has been deleted`})

        }
        
    } catch (error) {
        res.status(400).send({"err":"error"})
        
    }
})


module.exports={ contactRouter}