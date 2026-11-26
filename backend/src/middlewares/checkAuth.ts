import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
    userId?: string;
}

const checkAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace(/Bearer\s?/, "") || ''
    if(!token){
        return res.status(403).json({message: "Нет доступа"});
    } else {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {_id: string};
            req.userId = decoded._id;
            next();
        } catch (error) {
            return res.status(403).json({message: "Нет доступа"});
        }
    }
}

export default checkAuth;