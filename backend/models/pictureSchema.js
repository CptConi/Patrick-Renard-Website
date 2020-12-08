const mongoose = require('mongoose');

const pictureSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    isOnLandingPage: { type: Boolean, required: true, default: false },
    fullSizePath: { type: String, required: true },
    halfSizePath: { type: String, required: true },
    miniaturePath: { type: String, required: true },
});

module.exports = mongoose.model('Picture', pictureSchema);
