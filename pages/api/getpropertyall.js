import Property from "@/models/Property";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == "GET") {
        let property = await Property.find()
        console.log(property)
        res.status(200).json({ success: true, property: property });
    }
    else {
        res.status(400).json({ success: false, error: "error" });
    }
}

export default connectDB(handler);