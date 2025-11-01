import mongoose from "mongoose";

export const connectDB =  async () => {
    const MONGODB_URI = "mongodb+srv://Aashish07:aashish123@aashish.g76q0bb.mongodb.net/express";
    
    await mongoose.connect(MONGODB_URI).then(()=>{
        console.log("Database Connected");
    });
}