const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});

productSchema.path('price').validate(function(value) {
  return value >= 0;
}, 'Product price must be a positive number.');

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
