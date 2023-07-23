import mongoose from "mongoose";
import {   ObjectId } from 'bson';

const category =new mongoose.Schema({ 
    name:String,
    parent: ObjectId
})
export const Category = mongoose.model("Category",category); 