const { ClientModel } = require('../models/clientModel');
const { body, validationResult } = require('express-validator');
const errorHandler = require('../middlewares/errorHandlerMiddleware');

const validateInput = [
  body('name').isLength({ min: 3 }).trim().escape(),
  body('phone').isMobilePhone(),
  body('email').isEmail().normalizeEmail(),
  body('entity').isLength({ min: 3 }).trim().escape(),
  body('segment').isLength({ min: 3 }).trim().escape(),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorHandler(new Error('Validation Error'), req, res);
  }
  next();
};

const addClient = async (req, res) => {
  const { name, id, phone, email, entity, segment } = req.body;

  const response = new ClientModel({ name, phone, email, entity, segment });
  await response
    .save()
    .then((list) => {
      console.log(list);
      res.status(200).send('Document saved to database');
    })
    .catch((error) => {
      console.log(error);
      errorHandler(error, req, res);
    });
};

const getClients = async (req, res) => {
  await ClientModel.find()
    .then((list) => {
      console.log(list);
      res.status(200).send(list);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error getting documents from database');
    });
};

module.exports = {
  validateInput,
  handleValidationErrors,
  addClient,
  getClients,
};
