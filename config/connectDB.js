import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db connected SuccessFully")
    } catch(err){
        console.log("db connection error: ", err)
    }
}