import DBNAME from "../constant.js";
import mongoose from "mongoose";

const dbConfig=async () => {
    try {
         const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DBNAME}`);//?retryWrites=true&w=majority
         console.log(` MongoDB connection !! DB Host: ${
            connectionInstance.connection.host }`);
    } catch (error) {
        console.error("Error in DB Connection", error);
        process.exit(1);
    }
}

export default dbConfig;