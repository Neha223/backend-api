const config = {
	port: process.env.PORT || 4000,
	mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/node-api'
};

module.exports =  config;