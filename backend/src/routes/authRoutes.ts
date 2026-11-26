import { Router } from "express";
import { registerUser, loginUser, logout } from "../controllers/authController";
import { registerValidation, loginValidation } from "../validations/authValidations";
import { validateRequest } from "../middlewares/errorHandler";
import checkAuth from "../middlewares/checkAuth";

const authRouter = Router();

authRouter.post("/register", registerValidation, validateRequest, registerUser);
authRouter.post("/login", loginValidation, validateRequest, loginUser);
authRouter.post("/logout", checkAuth, logout);

export default authRouter;
