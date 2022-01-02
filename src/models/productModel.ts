import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema({
  name: {type: String, required:true},
  rating: {type: Number, required:true},
  comment: {type: String, required:true},
},{
  timestamps: true
})

const productsSchema = new Schema({
  user : {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: String,
    required : true
  },
  image: {
    type: String,
    required : true,
  },
  brand: {
    type: String,
    required : true
  },
  category: {
    type: String,
    required : true,
  },
  reviews: {
    name: {reviewSchema}
  },
  rating: {
    type: Number,
    required : true,
    default: 0
  },
  numReviews: {
    type: Number,
    required : true,
    default: 0
  },
  price: {
    type: Number,
    required : true,
    default: 0
  },
  countInStock: {
    type: Number,
    required : true,
    default: 0
  },
}, 
{
  timestamps: true,
})

const Product = mongoose.model('Product', productsSchema);

export default Product;