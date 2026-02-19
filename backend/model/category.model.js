import mongoose, { Mongoose } from "mongoose"

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);


const Category = mongoose.model('Category', categorySchema);

export default Category;