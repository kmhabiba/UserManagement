const express = require('express');
const router = express.Router();
const { addProduct, getProducts} = require('../controllers/productController');
const { protect } = require('../middlewares/authMiddleware');


 
router.post('/' , protect, addProduct);
router.get('/', getProducts);
 
module.exports = router;