import mongoose from "mongoose";

let HBC = "123";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(HBC); //Supposed to add Mongo URI HERE
    console.log("Connected to MONGODB");
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};
