const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    mobile: {type: String, default:''},
    status: {type: String, default:'Active'}

}, {timestamps: true});

mongoose.models = {};
export default mongoose.model('admin', AdminSchema);
// export default mongoose.models.Admin || mongoose.model('admin', AdminSchema);