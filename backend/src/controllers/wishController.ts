import { Response } from "express";
import Wish from "../models/Wish";
import User from "../models/User";
import { AuthRequest } from "../middlewares/checkAuth";

export const addWish = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { imageURL, caption, description, wishURL, price } = req.body;
        const userId = req.userId;
        if(!userId){
            res.status(403).json({ message: "You don't have permission to add a wish." });
            return;
        }

        const user = await User.findById(userId);

        if(!user){
             res.status(404).json({ message: "User not found." });
             return;
        }
        
        const newWish = new Wish({
            imageURL,
            caption, 
            description, 
            wishURL, 
            price,
            authorId: userId
        })

        await newWish.save();

        user.wishList.push(newWish._id);

        await user.save();
        res.status(201).json(newWish);
    } catch (error) {
        res.status(500).json({ message: "Server error." });
    }


}

export const editWish = async (req: AuthRequest, res: Response): Promise<void> => {  

    try {
        const wishId= req.params.id
        const userId = req.userId;
        const updateData = req.body;

        if(!userId){
            res.status(403).json({ message: "You don't have permission to edit this wish." });  
            return; 
        }

        const wish = await Wish.findById(wishId);
        if(!wish){
            res.status(404).json({message: 'Wish not found.' });  
            return;  
        }

        if(wish.authorId.toString() !== userId){
            res.status(403).json({ message: 'You are not authorized to edit this wish.' });  
            return;   
        }

        Object.assign(wish, updateData);
        await wish.save();  
        res.status(200).json(wish);
    } catch (error) {
        res.status(500).json({ message: 'Server error.' });  
    }
  }