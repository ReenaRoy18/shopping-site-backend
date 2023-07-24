import { ObjectId } from "bson";
import mongoose from "mongoose";

const supplierSchema = mongoose.Schema({
  name: String,
  address: ObjectId,
});

export const Supplier = mongoose.model("Supplier", supplierSchema);
