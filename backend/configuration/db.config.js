import mongoose from "mongoose";

const connectDb = async () => {
  try {
    console.log("connecting to mongodb🤌");
    const uri = process.env.MONGO_DB_URI;
    mongoose.connect(uri);
    console.log("connected to mongodb👍");
  } catch (err) {
    console.log("field to connection mongodb err==>", err);
  }
};
export default connectDb;
