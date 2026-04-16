const express=require("express");

const router=express.Router();

const User=require("../models/User");

router.post("/login",async(req,res)=>{
    const{email,password}=req.body;

    const user= await User.findOne({
        email,
        password
    });

    if(!user){
        return res.status(400).json({
            message: "Invalid credentials"
        });
    }

    res.json({
        message:"Login successful"
    });
});


router.post("/signup",async(req,res)=>{
    const {email , password}=req.body;

    const user=await User.create({
        email,
        password
    });
    res.json(user);
})

module.exports=router;