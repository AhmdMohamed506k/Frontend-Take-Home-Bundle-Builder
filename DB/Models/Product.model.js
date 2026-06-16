import mongoose, { model } from "mongoose";

const ProductSchema = new mongoose.Schema({
    
  CategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  ProductName: {
    type: String,
    required: true,
  },
  Description:{
    type:String
  },
  ImageUrl: {
    secure_url: { type: String, default: null },
    public_id: { type: String, default: null },
  }, 
  Stock: { 
    type: Number,
    required: true,
    default: 0,
    min: 0 
   },
  Price: {
    type: Number,
    required: true,
  },
  HasVariants: { 
    type: Boolean,
    default: false
   },
  Variants: [{
      name: { type: String }, 
      colorHex: { type: String }, 
      priceModifier: { type: Number, default: 0 },
      sku: { type: String },
    },],
  DiscountBadge: { type: String }, 
});

ProductSchema.index({ name: 'text' });

const ProductModel = model("Product",ProductSchema)