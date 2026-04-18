import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js"

mongoose.connect(process.env.MONGO).then(()=>console.log("connected to Mongodb"))
.catch(err=>console.log(err));


const app=express()
app.use(express.json())

app.get("/", (req, res) => {
  console.log("🔥 route working");
  res.json({
    message:"Hello fahim"
  });
});
app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });

})



app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT} `);
})
