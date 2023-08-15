import mongoose, { Mongoose } from "mongoose";

const deliveryAddressSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobileNo:String,
    houseNo:String,
    street:String,
    area:String,
    country:String,
    pincode:String
})

export const deliveryAddress = mongoose.model("userDeliveryAddress",deliveryAddressSchema)