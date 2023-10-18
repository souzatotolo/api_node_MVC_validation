const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const errorHandler = require('../middlewares/errorHandlermiddleware');

router.post('/add', clientController.addClient);
router.get('/get', clientController.getClients);

router.use(errorHandler);

module.exports = router;
