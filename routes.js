// routes.js

const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

// Routes for handling API requests
router.get('/products', controllers.getProducts);
router.post('/products', controllers.createProduct);
router.put('/products/:id', controllers.updateProduct);
router.delete('/products/:id', controllers.deleteProduct);

router.get('/recommendations', controllers.getRecommendations);
router.get('/insights', controllers.getInsights);
router.get('/performance', controllers.getPerformance);

module.exports = router;

