import Joi from 'joi';



export const createCategorySchema = {
    body: Joi.object({
        Name: Joi.string().min(3).max(50).required(),
        Description: Joi.string().min(10).max(200).required(),
    }).required(),
};

export const updateCategorySchema = {
    params: Joi.object({
        id: Joi.string().hex().length(24).required(), 
    }).required(),
    body: Joi.object({
        Name: Joi.string().min(3).max(50),
        Description: Joi.string().min(10).max(200),
    }).min(1), 
};

export const deleteCategorySchema = {
    params: Joi.object({
        id: Joi.string().hex().length(24).required(),
    }).required(),
};