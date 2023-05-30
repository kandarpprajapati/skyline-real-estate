import User from "../../models/User";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      if (req.body.email == user.email && req.body.password == user.password) {
        res
          .status(200)
          .json({ success: true, name: user.name, email: user.email });
      } else {
        res.status(200).json({ success: false, error: "Invalid Credentials" });
      }
    } else {
      res.status(200).json({ success: false, error: "User not found" });
    }
  } else {
    res
      .status(200)
      .json({ success: false, error: "This Method is not allowed" });
  }
};

export default connectDB(handler);
