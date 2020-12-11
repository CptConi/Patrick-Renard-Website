const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const filesController = require('../Controllers/filesController');

// Les routes fonction des requêtes à l'API:

router.get('/', filesController.getAllPictures);
router.get('/landingpagepics', filesController.getLandingPagePictures);
router.get('/gallery/:category', filesController.getGalleryFromCategory);

router.post('/', multer, filesController.newPicture);
router.post('/compressed', multer, filesController.uploadCompressedPicture);

router.put('/:category', /*auth,*/ filesController.modifyPicture);

router.delete('/:id', /*auth,*/ filesController.deletePicture);

module.exports = router;
