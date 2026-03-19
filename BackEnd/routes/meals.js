const express=require("express");

const router=express.Router();

const Meal=require("../models/Meal");


router.get("/", async(req,res)=>{
    const meals=await Meal.find();
    res.json(meals);
})


router.post("/", async (req,res)=>{

    const { name , calories } = res.body;

    const meal=await Meal.create({name , calories});
    res.json(meal);
})

module.exports=router;