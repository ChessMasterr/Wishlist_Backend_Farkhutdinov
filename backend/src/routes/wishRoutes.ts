import express from 'express';
import { addWish } from '../controllers/wishController';
import { addWishValidation } from '../validations/wishValidations';
import { validateRequest } from '../middlewares/errorHandler';
import checkAuth from '../middlewares/checkAuth';

const wishRouter = express.Router()

wishRouter.post('/addWish',checkAuth,addWishValidation,validateRequest,addWish )

export default wishRouter;