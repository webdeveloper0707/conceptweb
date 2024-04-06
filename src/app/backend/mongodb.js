import { mongoose } from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://67872shiv:admin@cluster0.nnzrf6d.mongodb.net/test")
        console.log("Connected to MongoDB.")
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;