import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('MongoDB is already Connected');
        return
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true;
        console.log('MongoDB is Connected');
        return
    } catch (error) {
        console.error(error)
    }
}

export default connectDB