import { Router } from "express";
import { register, login } from "../controllers/authController";
import { registerValidation, loginValidation } from "../validations/auth";
import  validateRequest  from "../middlewares/errorHandle";


const router = Router();

router.post('/register', registerValidation, validateRequest, register);
router.post('/login', loginValidation, validateRequest, login);

export default router;
