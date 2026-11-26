import { body,param } from 'express-validator';

const addWishValidation = [
    body('imageURL').optional().isURL().withMessage('Invalid imageURL format'),
    body('caption').notEmpty().withMessage('Caption is required').isLength({ min: 2 }).withMessage('Caption must be at least 2 characters long'),
    body('price').notEmpty().withMessage('Price is required').isFloat({gt: 0}).withMessage('Price must be a positive number'),
    body('description').notEmpty().withMessage('Description is required').isLength({ min: 3 }).withMessage('Description must be at least 3 characters long'),
    body('wishURL').notEmpty().withMessage('Wish URL is required').isURL().withMessage('Invalid URL format for wishURL'),

];

const editWishValidation  = [
    param('id')  
    .isMongoId().withMessage('Invalid wish ID'),  
    body('imageURL')  
    .optional()  
    .isURL().withMessage('Invalid imageURL format'),  
    body('caption')  
    .optional()  
    .isLength({ min: 2 }).withMessage('Caption must be at least 2 characters long'),  
    body('price')  
    .optional()  
    .isFloat({ gt: 0 }).withMessage('Price must be a positive number'), 
    body('description')  
    .optional()  
    .isLength({ min: 3 }).withMessage('Description must be at least 3 characters long'), 
    body('wishURL').optional().isURL().withMessage('Invalid URL format for wishURL') 
]

const deleteWishValidation = [
    param('id')  
    .isMongoId().withMessage('Invalid wish ID'),  
]

export {addWishValidation, editWishValidation, deleteWishValidation};