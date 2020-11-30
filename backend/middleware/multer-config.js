const multer = require("multer");
const util = require('util');

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

// Multer requiert un objet storage
const storage = multer.diskStorage({
  // On gère sa destination
  destination: (req, file, callback) => {
    let folder = JSON.parse(req.body.picture).categorie;
    let compressionLevel = JSON.parse(req.body.picture).size;
    callback(null, `images/${folder}/${compressionLevel}`);
  },
  // Puis son nom
  filename: (req, file, callback) => {
    let parsedReq = JSON.parse(req.body.picture);
    const name = parsedReq.name.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

var uploadFiles = multer({ storage: storage }).array('multi-files', 3);
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
