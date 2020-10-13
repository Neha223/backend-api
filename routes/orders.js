var express = require('express');
var router = express.Router();
const orderController = require('../controllers/OrderController');
const {validateOrder, validate, validateOrderStatus, validateGetOrder} = require('../middleware/validation-middleware');

// router.post('/seller',orderController.createSeller);
router.get('/order/:id', validateGetOrder(),validate,orderController.byId);
router.post('/order', validateOrder(),validate,orderController.create);
router.post('/order/status', validateOrderStatus(),validate,orderController.updateStatus);

module.exports = router;
