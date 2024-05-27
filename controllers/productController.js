const Product = require('../models/product');

exports.getProducts = async (req, res) => {
  const products = await Product.find().populate('categoryId');
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id).populate('categoryId');
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product has been deleted' });
};
