import mongoose, { Schema } from 'mongoose';

const UserItemSchema = new Schema({
  username: { type: String, unique: true, sparse: true },
  password: { type: String },
  email: { type: String, unique: true, required: true },
  googleId: { type: String, unique: true, sparse: true },
  name: { type: String },
  picture: { type: String },
  role: { type: String },
});

const UserItems = mongoose.model('UserItem', UserItemSchema);

export default UserItems;
