import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs'

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

userSchema.methods.matchPassword = async function (enteredPassword): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {

  if (!this.isModified('password')) {
    next() 
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('USER', userSchema);

export default User;