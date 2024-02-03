import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    roles: [String],
    fullName: String,
    birthday: String,
    National: String,
    birthPlace: String,
    skill: String,
    Project: String,
    myinfo: String
});




const UserModel = mongoose.model("user", UserSchema);

export { UserModel };