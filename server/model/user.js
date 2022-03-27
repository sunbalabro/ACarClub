const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    orders: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Order',
    }],
    role: {
        type: "String",
        enum: ["user", "admin"],
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;