import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required : true
  },email: {
    type: String,
    required : true,
    unique: true
  },password: {
    type: String,
    required : true
  },idAdmin: {
    type: Boolean,
    required : true,
    default: false
  },
}, {
  timestamps: true
})

const User = mongoose.model('USER', userSchema);

export default User;