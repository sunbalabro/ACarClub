const mongoose = require("mongoose");
const {Schema} = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        validate: {
            validator: (val) => {
                return val > 0;
            },
            message: "Price can not be less the 0."
        },
        required: true
    },
    image: {
        type: String,
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

const Product = mongoose.model('Product', productSchema);
module.exports = Product;