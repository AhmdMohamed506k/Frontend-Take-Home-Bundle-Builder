import mongoose, { model } from "mongoose";



const CategorySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Description: {
   type:String,
  },
  Slug: {
    type: String,
    required: true,
    unique: true,
    index: true
  },


});


const CategoryModel = model("Category",CategorySchema)

export default CategoryModel;