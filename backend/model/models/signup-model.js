import mongoose, {Schema} from "mongoose";

const RegisterSchema = new Schema({
    role: String,
    username: String,
    email: String,
    password: String
});

const RegistrationModel = mongoose.model('RegistrationUser', RegisterSchema);

export default RegistrationModel;