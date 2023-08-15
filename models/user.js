import mongoose from "mongoose";
import { ObjectId } from "bson";


const user = new mongoose.Schema({
  email: String,
  password: String,
  mobileNo:String,
  fullName:String,
  deliveryAdressIds:[ObjectId],
  paymentCards:[ObjectId]
});

export const User = mongoose.model("User", user);
