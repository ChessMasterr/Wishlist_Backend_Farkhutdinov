import { body } from "express-validator";

export const registerValidation = [
  body('email', 'Введите корректный email').isEmail().notEmpty(),
  body('password', 'Пароль должен быть не менее 6 символов').isLength({ min: 6 }).notEmpty(),
  body('username', 'Имя пользователя является обязательным').notEmpty(),
]

export const loginValidation = [ 
  body('email', 'Введите корректный email').isEmail().notEmpty(),
  body('password', 'Пароль является обязательным').notEmpty(),
]