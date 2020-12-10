const Picture = require('../models/pictureSchema');
const fs = require('fs');
const { send } = require('process');

// Renvoie le tableau de toutes les pictures depuis la base de données
exports.getAllPictures = (req, res, next) => {
    Picture.find()
        .then((picture) => res.status(200).json(picture))
        .catch((error) => res.status(404).json({ error }));
};

// Renvoie la picture avec l'ID fourni
exports.getOnePicture = (req, res, next) => {
    Picture.findOne({ _id: req.params.id })
        .then((picture) => res.status(200).json(picture))
        .catch((error) => res.status(404).json({ error }));
};

exports.getLandingPagePictures = (req, res, next) => {
    Picture.find({ isOnLandingPage: true })
        .then((pictures) => res.status(200).json(pictures))
        .catch((error) => res.status(404).json({ error }));
};

// Ajoute une picture non compressée sur le serveur et dans la BDD
exports.newPicture = (req, res, next) => {
    let pictureRequest = JSON.parse(req.body.picture);
    const protocol = req.protocol;
    const host = req.get('host');
    const folder = `images/${pictureRequest.categorie}`;
    const filename = req.file.path.split('\\')[3];
    console.log(`Requete post recu pour la photo ${filename}`);
    const picture = new Picture({
        name: pictureRequest.name,
        description: pictureRequest.description,
        category: pictureRequest.categorie,
        fullSizePath: `${protocol}://${host}/${folder}/full/${filename}`,
        halfSizePath: `${protocol}://${host}/${folder}/half/${filename}`,
        miniaturePath: `${protocol}://${host}/${folder}/miniature/${filename}`,
    });
    picture
        .save()
        .then(() => res.status(201).json({ message: 'Photo sauvegardée avec succès !' }))
        .catch((error) => res.status(400).json({ error }));
};

//Upload une picture compressée au serveur. Pas d'effet direct sur la BDD
exports.uploadCompressedPicture = (req, res, next) => {
    res.json('File uploaded successfully');
};

exports.modifyPicture = (req, res, next) => {
    Picture.updateOne(
        { category: req.params.category, isOnLandingPage: true },
        { isOnLandingPage: false }
    ).catch((error) => res.status(400).json({ error }));

    Picture.updateOne({ _id: req.body.id }, { isOnLandingPage: true })
        .then(() => res.status(200).json({ message: 'New landing page pic created' }))
        .catch((error) => res.status(400).json({ error }));
};

// Supprime la Picture avecl'ID fourni.
exports.deletePicture = (req, res, next) => {
    let deleteFromDB = true;
    Picture.findOne({ _id: req.params.id })
        .then((picture) => {
            const fileName = {
                full: picture.fullSizePath.split('/images/')[1],
                half: picture.halfSizePath.split('/images/')[1],
                miniature: picture.miniaturePath.split('/images/')[1],
            };
            if (`images/${fileName.miniature}`) {
                fs.unlink(`images/${fileName.miniature}`, (err) => {
                    if (err) throw err;
                });
            } else {
                deleteFromDB = false;
            }
            if (`images/${fileName.half}`) {
                fs.unlink(`images/${fileName.half}`, (err) => {
                    if (err) throw err;
                });
            } else {
                deleteFromDB = false;
            }
            if (`images/${fileName.full}`) {
                fs.unlink(`images/${fileName.full}`, () => {
                    if (deleteFromDB) {
                        Picture.deleteOne({ _id: req.params.id })
                            .then(() => res.status(200).json({ message: 'Picture supprimée' }))
                            .catch((error) => res.status(400).json({ error }));
                    }
                });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
