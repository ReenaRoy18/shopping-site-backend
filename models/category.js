import mongoose, { Schema } from "mongoose";

export const categorySchema = new mongoose.Schema({
  name: String, //brown rice
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Category", // This should match the model name of the referenced collection
    
  },
  isDeleted:{
    type:Boolean,
    default:false
  }
});
export const Category = mongoose.model("Category", categorySchema);
