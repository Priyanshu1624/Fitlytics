const express=require("express");
const connectDB=require("../BackEnd/config/db");
connectDB();
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server is running");
})

app.listen(3001,()=>{
    console.log("Port 3001 is active");
})


const mealRoutes=require("./routes/meals");
app.use("/meals",mealRoutes);

