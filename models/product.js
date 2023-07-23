import mongoose from "mongoose";
import { categorySchema } from "./category.js";

export const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: categorySchema,
  price: Number,
  offer: Number,
  unit: String,
  inStock: Boolean,
  quantity: Number,
});

export const Product = mongoose.model("Product", productSchema);
