import User from "../../models/User";
import connectDB from "../../middleware/mongoose";
import jsonwebtoken from "jsonwebtoken";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == "POST") {
        // console.log(req.body);
        
        let token = req.body.token
        let user = jsonwebtoken.verify(token, process.env.JWT_SECRET)
        // console.log(user)
        let dbUser = await User.findOneAndUpdate({ email: user.email}, {password: CryptoJS.AES.encrypt(req.body.npassword,"skylineKHJY").toString()})

        res.status(200).json({ success: true});
    }
    else {
        res.status(400).json({ success: false, error: "error" });
    }
}

export default connectDB(handler);