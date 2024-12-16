import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
})

export const userModel =mongoose.model('user', userSchema)