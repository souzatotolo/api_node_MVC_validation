const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  entity: {
    type: String,
    required: true,
  },
  segment: {
    type: String,
    required: true,
  },
});

const ClientModel = mongoose.model('Client', clientSchema);

module.exports = {
  ClientModel,
  clientSchema,
};
