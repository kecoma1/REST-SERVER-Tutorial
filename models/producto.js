const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, 'The name is mandatory']
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: 'No description'
    }
});

module.exports = model('Product', ProductSchema);