import Admin from "../../models/Admin";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);

    let admin = await Admin.findOne({ email: req.body.email });
    const bytes  = CryptoJS.AES.decrypt(admin.password, process.env.ADMIN_SECRET);
    console.log(bytes.toString(CryptoJS.enc.Utf8));
    let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

    if (admin) {
      if (req.body.email == admin.email && req.body.password == decryptedPass) {
        var token = jwt.sign({ name: admin.name, email: admin.email}, process.env.ADM_JWT_SECRET,{expiresIn: '24h'});
        res.status(200).json({success: true, token});
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
