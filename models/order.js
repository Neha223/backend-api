const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const productSchema = new mongoose.Schema({
    name:String,
    qty: Number,
    unit_price: Number
 });
const orderSchema = new Schema({
    status: String,
    products:[productSchema]
});

module.exports = mongoose.model('Orders', orderSchema);
