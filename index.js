const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.API_PORT;
const apiName = process.env.API_NAME;
const app = express();

app.use(cors());
app.use(express.json());

const dbConnect = require('./src/db/conn');
dbConnect();

const clientRoutes = require('./src/routes/clientRoutes');
app.use('/clients', clientRoutes);

app.listen(port, () => {
  console.log(`${apiName} running on port: ${port}`);
});
