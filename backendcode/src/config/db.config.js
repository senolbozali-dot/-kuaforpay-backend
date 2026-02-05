import { env } from "./env.js";
import mongoose from "mongoose";
console.log('-------------',env.mongo_url);
const conn = async () => {
    try {
        const res = await mongoose.connect(env.mongo_url);
        if (res) {
            console.log("Connected to MongoDB");
        }
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

conn();
