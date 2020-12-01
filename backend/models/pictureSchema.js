const mongoose = require('mongoose');

const pictureSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  fullSizePath: { type: String, required: true },
  midSizePath: { type: String, required: true },
  miniaturePath: { type: String, required: true },
});

module.exports = mongoose.model('Picture', pictureSchema);
