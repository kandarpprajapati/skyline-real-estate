import User from "../../models/User";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);

    let user = await User.findOne({ email: req.body.email });
    const bytes  = CryptoJS.AES.decrypt(user.password, 'skylineKHJY');
    console.log(bytes.toString(CryptoJS.enc.Utf8));
    let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

    if (user) {
      if (req.body.email == user.email && req.body.password == decryptedPass) {
        var token = jwt.sign({ name: user.name, email: user.email }, 'alwaysbeKYHJ',{expiresIn: '3d'});
        res
          .status(200)
          .json({success: true, token});
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
