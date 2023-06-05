import User from "../../models/User";
import connectDB from "../../middleware/mongoose";
import jsonwebtoken from "jsonwebtoken";

const handler = async (req, res) => {
    if (req.method == "POST") {
        console.log(req.body);
        
        let token = req.body.token
        let user = jsonwebtoken.verify(token, process.env.JWT_SECRET)
        let dbUser = await User.findOne({ email: user.email })
        console.log(dbUser)
        res.status(200).json({ success: true, user: user });
    }
    else {
        res.status(400).json({ success: false, error: "error" });
    }
}

export default connectDB(handler);