import { Request, Response } from "express";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/User";

const registerUser = async (req: Request, res: Response) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(req.body.password, salt);
        const User = await UserModel.create({
            username: req.body.username,
            email: req.body.email,
            passwordHash,
        });
        const token = jwt.sign(
            {_id: User._id},
            process.env.JWT_SECRET as string,
            {expiresIn: "30d"},
        );
        const userData = {
            _id: User._id,
            username: User.username,
            email: User.email,
        }
        res.status(201).json({...userData, token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
 
}

const loginUser = async (req: Request, res: Response) => {
    try {

        const User = await UserModel.findOne({ email: req.body.email });
        if (!User) {
            return res.status(400).json({message: "Неверный логин или пароль"});
        }

        const isMatch = await bcrypt.compare(req.body.password, User.passwordHash);
        if (!isMatch) {
            return res.status(400).json({message: "Неверный логин или пароль"});
        }

        const token = jwt.sign(
            {_id: User._id},
            process.env.JWT_SECRET as string,
            {expiresIn: "30d"},
        );
        const userData = {
            _id: User._id,
            username: User.username,
            email: User.email,
        }
        res.status(200).json({...userData, token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
 
}

const logout = async (req: Request, res: Response) => {

            res.status(200).json({message: "Вы вышли из аккаунта"});


}

export { registerUser, loginUser, logout }