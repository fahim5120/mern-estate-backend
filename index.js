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

app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT} `);
})
