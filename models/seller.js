const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const sellerSchema = new Schema({
  name: String,
  mobile: Number  
});

module.exports = mongoose.model('sellers', sellerSchema);
