import mongoose from "mongoose"
import {DB_NAME} from "../constant.js"

export const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB}/${DB_NAME}`)
        console.log(`\n mongoDB is connected ${connectionInstance}`)
    }catch(error){
        console.log("mongoDB connection error:",error)
        process.exit(1)
    }
}