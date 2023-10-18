const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const {
  validateInput,
  handleValidationErrors,
} = require('../controllers/clientController');

router.post(
  '/add',
  validateInput,
  handleValidationErrors,
  clientController.addClient
);
router.get('/get', clientController.getClients);

module.exports = router;
