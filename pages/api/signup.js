import User from '../../models/User';
import connectDB from '../../middleware/mongoose';

const handler = async (req, res) => {
    if(req.method=="POST") {
        console.log(req.body);

        let user = new User(req.body);
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