const Picture = require('../models/pictureSchema');
const fs = require('fs');

// Renvoie le tableau de toutes les pictures depuis la base de données
exports.getAllPictures = (req, res, next) => {
  Picture.find()
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(404).json({ error }));
};
// Renvoie la picture avecl'ID fourni
exports.getOnePicture = (req, res, next) => {
  Picture.findOne({ _id: req.params.id })
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(404).json({ error }));
};


exports.newPicture = (req, res, next) => {
  const pictureObject = JSON.parse(req.body.picture);
  delete pictureObject._id;
  const picture = new Picture({
    ...pictureObject,
    userId: pictureObject.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,

    likes: 0,
    dislikes: 0,
    userLiked: null,
    userDisliked: null,
  });
  picture
    .save()
    .then(() => res.status(201).json({ message: "Picture initialisée" }))
    .catch((error) => res.status(400).json({ error }));
};


exports.modifyPicture = (req, res, next) => {
  if (req.file) {
    //Suppression de l'ancienne image dans le stockage serveur:
    Picture.findOne({ _id: req.params.id })
      .then((picture) => {
        const filename = picture.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {});
      })
      .catch((error) => res.status(500).json({ error }));
    pictureObject = {
      //Une modif d'image est demandée
      ...JSON.parse(req.body.picture),
      imageUrl: `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`,
    };
  } else {
    //Modif d'infos texte uniquement
    pictureObject = { ...req.body };
  }
  Picture.updateOne(
    { _id: req.params.id },
    { ...pictureObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Picture modifiée" }))
    .catch((error) => res.status(400).json({ error }));
};

// Supprime la Picture avecl'ID fourni.
exports.deletePicture = (req, res, next) => {
  Picture.findOne({ _id: req.params.id })
    .then((picture) => {
      const filename = picture.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Picture.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Picture supprimée" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};


