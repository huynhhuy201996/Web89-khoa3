
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const Userchema = new Schema({
    _id: ObjectId,
    userName: String,
    email: String,
    age: Number,
    avater: String

});

const UserModel = mongoose.model("user", Userchema);

export { UserModel }; 