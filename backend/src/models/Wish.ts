import mongoose, { Document, Schema } from "mongoose"; 

export interface IWish  extends Document {
    imageURL? : string;
    caption: string;
    description: string;
    wishURL : string;
    price : number;
    authorId : mongoose.Types.ObjectId;
}

const WishSchema = new Schema<IWish>({

  imageURL : { type: String },
  caption: { type: String, required: true },
  description: { type: String, required: true },
  wishURL : { type: String, required: true },
  price : { type: Number, required: true },
  authorId :{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
})



export default mongoose.model("Wish", WishSchema);