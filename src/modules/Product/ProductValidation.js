
import joi from 'joi';
import { generalFields } from '../../middleWare/Validation/generalFields.js';


export const AddProductSchema = {
    body: joi.object({
        CategoryId: generalFields.id.required(),
        ProductName: joi.string().min(3).max(100).required(),
        Description: joi.string().min(10).max(5000),
        Stock: joi.number().integer().min(0).required(),
        Brand: joi.string(),
        ColorName: joi.string(),
        ColorHex: joi.string(),
        BasePrice: joi.number().positive().required(),
        HasOffer: joi.boolean(),
        TotalOffer: joi.number().min(0).max(100),
        PriceAfterOffer: joi.number().positive(),
        HasVariants: joi.boolean(),
       
        Variants: joi.string() 
    }).required(),
    params: joi.object({}).required(),
    query: joi.object({}).required()
};

export const UpdateProductSchema = {
    body: joi.object({
        ProductName: joi.string().min(3).max(100),
        Description: joi.string().min(10).max(5000),
        Stock: joi.number().integer().min(0),
        BasePrice: joi.number().positive(),
        HasOffer: joi.boolean(),
        TotalOffer: joi.number().min(0).max(100),
        PriceAfterOffer: joi.number().positive(),
        Variants: joi.string()
    }).required(),
    params: joi.object({
        productId: generalFields.id.required()
    }).required(),
    query: joi.object({}).required()
};

export const DeleteProductSchema = {
    params: joi.object({
        productId: generalFields.id.required()
    }).required()
};