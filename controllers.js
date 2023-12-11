// controllers.js

const Product = require('./models');

// Controller for getting all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for creating a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;
    const product = new Product({ name, price, image });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for updating a product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, image } = req.body;
    const product = await Product.findByIdAndUpdate(id, { name, price, image }, { new: true });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for deleting a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for getting product recommendations
exports.getRecommendations = async (req, res) => {
  try {
    // Logic for getting product recommendations based on customer behavior and preferences
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for getting customer insights
exports.getInsights = async (req, res) => {
  try {
    // Logic for getting customer insights
    res.status(200).json(insights);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for getting sales team performance
exports.getPerformance = async (req, res) => {
  try {
    // Logic for getting sales team performance
    res.status(200).json(performance);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
