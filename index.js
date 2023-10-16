const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.API_PORT;
const apiName = process.env.API_NAME;
const app = express();
const clientRoutes = require('./routes/clientRoutes');

app.use(cors());
app.use(express.json());

const dbConnect = require('./db/conn');
dbConnect();

app.use('/clients', clientRoutes);

app.listen(port, () => {
  console.log(`${apiName} running on port: ${port}`);
});
