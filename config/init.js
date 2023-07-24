import mongoose from "mongoose";

export function init() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/shopping")
    .then((res) => {
      console.log("connected DB");
    })
    .catch((err) => {
      console.log(err);
    });
}
