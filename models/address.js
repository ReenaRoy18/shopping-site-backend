import mongoose from "mongoose";

const address = mongoose.Schema({
  plot_No: String,
  street: String,
  area: String,
  city: String,
  state: String,
  country: String,
});

export const Address = mongoose.model("address", address);
