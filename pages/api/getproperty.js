import Property from '../../models/Property'
import connectDB from '../../middleware/mongoose'

const handler = async (req, res) => {
    const property = await Property.find()


    res.status(200).json({ property: property })
}

export default connectDB(handler)