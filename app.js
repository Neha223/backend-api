var express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const rateLimit = require("express-rate-limit");
// DB connection
require('./config/dbConnection');

// const product = require('./routes/products');
const order = require('./routes/orders');


var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 10,    // 10 request allowed
  message:
  {status: 429,message:  "Too many requests, please try again after an hour"}
});
// app.use("/api/v1", [apiLimiter,product]);
app.use('/api/v1',[apiLimiter,order]);


app.listen(config.port, () => {
	console.log(`Server connected at port ${config.port}`);
});
