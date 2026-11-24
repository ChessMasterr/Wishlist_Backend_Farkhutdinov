import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/wishlist";

mongoose.connect(mongoURI).then(() => {
	console.log("Connected to MongoDB");
}).catch((error) => {
  console.log("MongoDB connection error", error);
  process.exit(1);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});