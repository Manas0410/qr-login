import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },
  },
  { timestamps: true }
);

export const UserModel = model("users", userSchema);