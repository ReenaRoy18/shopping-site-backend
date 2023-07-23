import { ObjectId } from "bson";
import mongoose from "mongoose";
import { Category } from "./category.js";

const product = new mongoose.Schema({
  name: String,
  description: String,
  category: {type:mongoose.Schema.Types.ObjectId,ref:"Category"},
  price: Number,
  offer: Number,
  unit: String,
  inStock: Boolean,
  quantity: Number,
});

export const Product = mongoose.model("Product", product);
