const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const filesController = require('../Controllers/filesController');

// Les routes fonction des requêtes à l'API:

router.get('/', filesController.getAllPictures);
// router.get('/:id', filesController.getOnePicture);
router.get('/landingpagepic', filesController.getLandingPagePictures);

router.post('/', multer, filesController.newPicture);
router.post('/compressed', multer, filesController.uploadCompressedPicture);

router.put('/:category', /*auth,*/  filesController.modifyPicture);

router.delete('/:id', /*auth,*/ filesController.deletePicture);

module.exports = router;
