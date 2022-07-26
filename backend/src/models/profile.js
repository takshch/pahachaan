const mongoose = require('mongoose');
const { Schema } = mongoose;
const { uuidWithoutDash } = require('../utils/uuid');

const profileSchema = new Schema({
  _id: { type: String, default: uuidWithoutDash },
  name: { type: String, required: true },
  numbers: { type: [Number], required: true },
  whatsapps: { type: [Number] },
});

module.exports = mongoose.model('Profile', profileSchema);