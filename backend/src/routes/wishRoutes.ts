import express from 'express';
import { addWish, deleteWish, editWish } from '../controllers/wishController';
import { addWishValidation, deleteWishValidation, editWishValidation } from '../validations/wishValidations';
import { validateRequest } from '../middlewares/errorHandler';
import checkAuth from '../middlewares/checkAuth';

const wishRouter = express.Router()

wishRouter.post('/addWish',checkAuth,addWishValidation,validateRequest,addWish )
wishRouter.put('/editWish/:id', checkAuth, editWishValidation, validateRequest, editWish);  
wishRouter.delete('/deleteWish/:id', checkAuth, deleteWishValidation, validateRequest, deleteWish);  

export default wishRouter;