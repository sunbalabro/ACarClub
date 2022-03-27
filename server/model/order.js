const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    products: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Product',
    }],
    amount: {
        type: Number,
        required: true
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Order = mongoose.model('Order', productSchema);
module.exports = Order;