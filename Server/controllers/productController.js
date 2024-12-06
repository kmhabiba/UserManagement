//correct code without image
const Product = require('../Models/Product');
 
const addProduct = async (req, res) => {
  const { name, price } = req.body;
  console.log('Request payload:',req.body);
  
  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }
 
  try {
    const newProduct = new Product({ name, price });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding product' });
  }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching products' });
    }
};
 
module.exports = { addProduct, getProducts };