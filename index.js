const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.API_PORT;
const apiName = process.env.API_NAME;
const app = express();

app.use(cors());
app.use(express.json());

const dbConnect = require('./db/conn');
const { ClientModel } = require('./models/clientModel');
dbConnect();

app.listen(port, () => {
  console.log(`${apiName} running on port: ${port}`);
});

app.post('/add', (req, res) => {
  const { name, id, phone, email, entity, segment } = req.body;
  const response = new ClientModel({ name, phone, email, entity, segment });
  response
    .save()
    .then((list) => {
      console.log(list);
      res.status(200).send('Document saved to database');
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Error saving document to database');
    });
});

app.get('/get', (req, res) => {
  ClientModel.find()
    .then((list) => {
      console.log(list);
      res.status(200).send(list);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error getting documents from database');
    });
});
