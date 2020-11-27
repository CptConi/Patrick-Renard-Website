const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const filesController = require('../Controllers/filesController');

// Les routes fonction des requêtes à l'API:

router.get('/', filesController.getAllPictures);
router.get('/:id', filesController.getOnePicture);

router.post('/',multer,  filesController.newPicture);

router.put('/:id', auth, multer, filesController.modifyPicture);

router.delete('/:id', auth, filesController.deletePicture);

module.exports = router;
