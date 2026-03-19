const mongoose=require("mongoose");

const connectDB= async ()=>{
    try{
        await mongoose.connect("mongodb+srv://priyanshug1602:Mampichu1624@priyanshu1624.ixs2az3.mongodb.net/?appName=Priyanshu1624");
        console.log("DB connected");
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports=connectDB;