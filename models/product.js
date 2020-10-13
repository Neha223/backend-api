const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  sku_id: String    
});

module.exports = mongoose.model('Products', productSchema);
