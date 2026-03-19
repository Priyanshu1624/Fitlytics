
const mongoose=require("mongoose");

const mealSchema=new mongoose.Schema(({

    name:String,
    calories: Number
}));

module.exports =mongoose.model("Meal", mealSchema);