import mongoose from "mongoose";
import { categorySchema } from "./category.js";

export const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  image:String,
  category: categorySchema,
  price: Number,
  offer: Number,
  unit: String,
  inStock: Boolean,
  quantity: Number,
  isDeleted:{
    type:Boolean,
    default:false
  }
});

export const Product = mongoose.model("Product", productSchema);

