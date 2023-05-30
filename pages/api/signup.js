import User from '../../models/User';
import connectDB from '../../middleware/mongoose';
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if(req.method=="POST") {
        console.log(req.body);

        const {name, email} = req.body;
        let user = new User({name, email,password: CryptoJS.AES.encrypt(req.body.password,"skylineKHJY").toString()});
        await user.save();

        res.status(200).json({success: true});
    }
    else {
        res.status(400).json({error: "This Method is not allowed"});
    }
}

export default connectDB(handler);

// const signup = async (req, res) => {
//     try {
//         const {name, email, password} = req.body;
//         const user = await User.create({name, email, password});
//         res.status(201).json({success: true, user});
//     } catch (error) {
//         res.status(400).json({success: false});
//     }
// }