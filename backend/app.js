const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

//environment variables
require('dotenv').config();

const cors = require('cors');

// App
const app = express();

// Routes
const filesRoutes = require('./Routes/filesRoutes');

const uri = process.env.MONGO_URI;

mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log('Connexion à MongoDB échouée !', err));

// Set le HEADER pour qu'il accepte les requêtes Cross Origin (Et empêcher les bugs de CORS)
app.use(cors());

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/files', filesRoutes);

module.exports = app;
