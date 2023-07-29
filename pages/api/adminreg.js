import Admin from "../../models/Admin";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);

    const { name, email, mobile } = req.body;
    let admin = new Admin({
      name,
      email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.ADMIN_SECRET,
      ).toString(),
      mobile
    });
    await admin.save();

    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ error: "This Method is not allowed" });
  }
};

export default connectDB(handler);
