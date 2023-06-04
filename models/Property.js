const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    p_id: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    building_no: {type: String, required: true},
    address: {type: String, required: true},
    email: {type: String, required: true},
    mobile: {type: String, required: true},
    list_for: {type: String, required: true},
    plot_area: {type: String, required: true},
    bedrooms: {type: String, required: true},
    halls: {type: String, required: true},
    kitchen: {type: String, required: true},
    other_facilities: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String, required: true},
    images: {type: String, required: true},

}, {timestamps: true});

mongoose.models = {};
export default mongoose.model('properties', PropertySchema);
// export default mongoose.models.Property || mongoose.model('properties', PropertySchema);