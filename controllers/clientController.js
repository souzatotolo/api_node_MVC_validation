const { ClientModel } = require('../models/clientModel');

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
      res.status(500).send('Error saving document to database');
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

module.exports = { addClient, getClients };
