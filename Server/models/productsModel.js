const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Products = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    category: { type: String, required: true },
    sizes: [
        {
            size: { type: String, default: 'S' },
            quantity: { type: Number, required: true },
        },
        {
            size: { type: String, default: 'M' },
            quantity: { type: Number, required: true },
        },
        {
            size: { type: String, default: 'L' },
            quantity: { type: Number, required: true },
        },
    ],
    status: { type: String, required: true },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    type: { type: String, required: true },
    description: { type: String, required: true },
})

module.exports = mongoose.model('Products', Products);