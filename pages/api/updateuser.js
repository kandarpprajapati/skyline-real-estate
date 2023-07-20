import User from "../../models/User";
import connectDB from "../../middleware/mongoose";
import jsonwebtoken from "jsonwebtoken";

const handler = async (req, res) => {
    if (req.method == "POST") {
        // console.log(req.body);
        
        let token = req.body.token
        let user = jsonwebtoken.verify(token, process.env.JWT_SECRET)
        // console.log(user)
        let dbUser = await User.findOneAndUpdate({ email: user.email },{name:req.body.name, mobile:req.body.mobile, address:req.body.address})
        console.log(dbUser)

        const { name, email, mobile, address } = dbUser
        res.status(200).json({ success: true, name, email, mobile, address });
    }
    else {
        res.status(400).json({ success: false, error: "error" });
    }
}

export default connectDB(handler);