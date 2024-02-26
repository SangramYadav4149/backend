import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
    const connect = await mongoose.connect(
      `mongodb://127.0.0.1:27017/pro-manage`
    );
    console.log(`DATABASE CONNECTED ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error :${error.message}`);
  }
};
