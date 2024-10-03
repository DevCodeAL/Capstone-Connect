import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: String,
  age: Number
});

const Item = mongoose.model('Item', UserSchema);

export default Item;
