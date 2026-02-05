import dotenv from "dotenv";

dotenv.config();
console.log(process.env.NODE_ENV);
export const env = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  mongo_url:process.env.MONGO_URI
};
