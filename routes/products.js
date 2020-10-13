const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const {validateProduct, validate} = require('../middleware/validation-middleware');

router.get('/products', productController.all);
router.get('/products/:id', productController.byId);
router.post('/products', validateProduct(),validate,productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);

module.exports = router;