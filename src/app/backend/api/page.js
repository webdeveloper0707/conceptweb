// pages/api/data.js
import dbConnect from '../mongodb.js';

export default async function handler(req, res) {
    await dbConnect();

    // Define your schema and model here
    const userSchema = new mongoose.Schema({ name: String });
    const User = mongoose.model('User', userSchema);

    // Example: Fetch all users
    const users = await User.find({});

    res.status(200).json({ users });
}

