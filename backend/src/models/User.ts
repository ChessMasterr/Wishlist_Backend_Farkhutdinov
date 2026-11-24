import mongoose, { Document, Schema } from "mongoose"; 

export interface IUser extends Document {
  email: string;
  username: string;
  passwordHash: string;
  wishList: mongoose.Schema.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  passwordHash: { type: String, required: true },
  wishList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Wish" }],
})

export default mongoose.model<IUser>("User", UserSchema);