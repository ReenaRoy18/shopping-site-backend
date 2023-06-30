import { ObjectId } from "bson";
import mongoose from "mongoose";

const product = new mongoose.Schema({
  name: String,
  description: String,
  categories: String,
  price: Number,
  offer: Number,
  unit: Number,
  inStock: Boolean,
  quantity: Number,
});

export const Product = mongoose.model("Product", product);
