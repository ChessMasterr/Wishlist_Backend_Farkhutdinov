import { body } from 'express-validator';

const addWishValidation = [
    body('imageURL').optional().isURL().withMessage('Invalid imageURL format'),
    body('caption').notEmpty().withMessage('Caption is required').isLength({ min: 2 }).withMessage('Caption must be at least 2 characters long'),
    body('price').notEmpty().withMessage('Price is required').isFloat({gt: 0}).withMessage('Price must be a positive number'),
    body('description').notEmpty().withMessage('Description is required').isLength({ min: 3 }).withMessage('Description must be at least 3 characters long'),
    body('wishURL').notEmpty().withMessage('Wish URL is required').isURL().withMessage('Invalid URL format for wishURL'),
];

export {addWishValidation};