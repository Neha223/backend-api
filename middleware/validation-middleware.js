const { body, validationResult, check,param} = require('express-validator/check');

const validateProduct = () => {
	return [
		body('name')
		.exists()
		.isString().withMessage('Product Name should be string')
        .isLength({min: 1 , max: 50}).withMessage('Product Name should not be empty, should be more than one and less than 50 character')
        .trim(),
		body('price')
		.exists().withMessage('Product Price should be exists')
		.isNumeric(),
		body('description')
		.optional(),
		body('sku_id')
		.exists().withMessage('SKU ID should be exists')
	  ]
};
const validateOrder = () => {
	return [
		check('products')
		.exists().withMessage('Products must be exists')
		.isArray({min:1}).withMessage('Products list should be an array, should be contain atleast one product'),
		check('products.*.name')
		.exists().withMessage('Product Name must be exists'),
		check('products.*.qty')
		.exists().withMessage('Product Qty must be exists')
		.isInt({gt:0}).withMessage('Product Qty must be greator than zero'),
		check('products.*.unit_price')
		.exists().withMessage('Product Unit price must be exists')
		.isNumeric(),
		check('status')
		.exists().equals('created'),
		check('total_price')
		.exists().isNumeric(),
		check('total_qty')
		.exists()
		.isInt()
	  ]
};
const validateOrderStatus = () => {
	return [
		body('status')
		.exists().withMessage('Status must be exists')
		.isIn(['accepted', 'rejected','dispatched']),
		body('order_id')
		.exists().withMessage('Order ID must be exists')
	  ]
};
const validateGetOrder = () => {
	return [
		param('id')
		.exists().withMessage('ID must be exists')
	  ]
};

const validate = (req, res, next) => {
	const errors = validationResult(req)
	if (errors.isEmpty()) {
	  return next()
	}
	if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }
  }

  module.exports = {
	validateProduct,
	validateOrder,
	validateOrderStatus,
	validateGetOrder,
	validate,
  }

