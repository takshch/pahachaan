const mongoose = require('mongoose');
const { Schema } = mongoose;
const { uuidWithoutDash } = require('../utils/uuid');

const identitySchema = new Schema({
  _id: { type: String, default: uuidWithoutDash },
  profileId: { type: String, ref: 'Profile' },
  owner: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model('Identity', identitySchema);