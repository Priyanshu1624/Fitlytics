const express=require("express");

const connectDB=require("./config/db");

const app=express();

app.use(express.json());


connectDB();


app.get("/",(req,res)=>{
    res.send("Server Running");
});

const authRoutes=require("./routes/auth");

app.use("/auth",authRoutes);

app.listen(3001,()=>{
    console.log("Server started on port 3001");
})
