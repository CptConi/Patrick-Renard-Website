const multer = require('multer');
const util = require('util');
// const path = require('path');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
};

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}
today = mm + '-' + dd + '-' + yyyy;

// Multer requiert un objet storage
const storage = multer.diskStorage({
    // On gère sa destination
    destination: (req, file, callback) => {
        let folder = JSON.parse(req.body.picture).categorie;
        let compressionLevel = JSON.parse(req.body.picture).compressionLevel;
        callback(null, `images/${folder}/${compressionLevel}`);
    },
    // Puis son nom
    filename: (req, file, callback) => {
        let parsedReq = JSON.parse(req.body.picture);
        const name = parsedReq.name.split(' ').join('_');
        name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + today + '.' + extension);
    },
});

module.exports = multer({ storage: storage }).single('image');
