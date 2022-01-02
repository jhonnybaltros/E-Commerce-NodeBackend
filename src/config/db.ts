import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectURI: string = process.env.MONGO_URI || "";

const concectDB = async () => {
  try {
    const connectToMongo = mongoose.connect(connectURI);

    console.log(`MongoDB connected: ${(await connectToMongo).connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default concectDB;
