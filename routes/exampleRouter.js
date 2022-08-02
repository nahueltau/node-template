const express = require('express');
const ExampleController = require('../controllers/exampleController');
const router = express.Router();

router.get('/', ExampleController.get)

module.exports = router;