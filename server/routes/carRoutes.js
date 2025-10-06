const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.get('/cars', carController.getCars);
router.post('/book', carController.bookCar);

module.exports = router;