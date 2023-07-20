const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    mobile: {type: String, default:''},
    address: {type: String, default:''}

}, {timestamps: true});

mongoose.models = {};
export default mongoose.model('user', UserSchema);
// export default mongoose.models.User || mongoose.model('user', UserSchema);