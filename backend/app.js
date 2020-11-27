const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const cors = require('cors');

// App
const app = express();

// Routes
const filesRoutes = require('./Routes/filesRoutes');

mongoose
    .connect(
        'mongodb+srv://So_Pekocko_Admin_Mongo:piGWDRfWwp3VONBq@sopekocko.nwyga.mongodb.net/Patrick_D_Andernos?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Set le HEADER pour qu'il accepte les requêtes Cross Origin (Et empêcher les bugs de CORS)
app.use(cors());

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/files', filesRoutes);

module.exports = app;
