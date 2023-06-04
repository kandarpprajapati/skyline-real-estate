import Property from '../../models/Property';
import connectDB from '../../middleware/mongoose';

const handler = async (req, res) => {
    if(req.method=="POST") {
        console.log(req.body);

        const {p_id, name, building_no, address, email, mobile, list_for, plot_area, bedrooms, halls, kitchen, other_facilities, price, description, images} = req.body;
        let property = new Property({p_id, name, building_no, address, email, mobile, list_for, plot_area, bedrooms, halls, kitchen, other_facilities, price, description, images});
        await property.save();

        res.status(200).json({success: true});
    }
    else {
        res.status(400).json({error: "This Method is not allowed"});
    }
}

export default connectDB(handler);

