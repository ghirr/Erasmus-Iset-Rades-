const express = require("express");
const multer = require("multer");
const partenaire = require('../model/partenaireSchema');
const router = express.Router();

const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images/partenaires");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-partenaire-" + "." + extension;
    cb(null, imgName);
  },
});

// Add partenaire
router.post(
  "/",
  multer({ storage: storage }).single("image"),
  async (req, res) => {
    console.log(req.body);
    let url = req.protocol + "://" + req.get("host");
    const Partenaire = new partenaire({
        partenaireName: req.body.partenaireName,
        dateDePartenariat: req.body.dateDePartenariat,
        nomPays: req.body.nomPays,
        email: req.body.email,
      image: url + "/images/partenaires/" + req.file?.filename,
    });

    console.log(Partenaire);
    Partenaire.save()
      .then((Project) => {
        res.status(200).json({ message: "Partenaire added" });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  }
);
//   trait logique get all partenaires
router.get("/", (req, res) => {
    partenaire.find().populate().then((findedObject) => {
    res.status(200).json({
      partenaires: findedObject,
      
    });
  });
});
//   trait logique delete partenaire
router.delete("/:id", (req, res) => {
  console.log("here into delete", req.params.id);
  partenaire.deleteOne({ _id: req.params.id }).then(() => {
    res.status(200).json({
      message: "partenaire deleted",
    });
  });
});
//   trait logique get partenaire by Id
router.get("/:id", (req, res) => {
  console.log("here into get partenaire by id", req.params.id);
  partenaire.findOne({ _id: req.params.id }).then((data) => {
    res.status(200).json({
      partenaire: data,
    });
  });
});
//trait update partenaire

router.put("/:id", multer({ storage: storage }).single("image"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const updatedPartenaire = {
    partenaireName: req.body.partenaireName,
    dateDePartenariat: req.body.dateDePartenariat,
    nomPays: req.body.nomPays,
    email: req.body.email,
    image: url + "/images/partenaires/" + req.file.filename,
  };

  partenaire.findOneAndUpdate(
    { _id: req.params.id },
    updatedPartenaire,
    { new: true }
  )
    .then((partenaire) => {
      if (partenaire) {
        res.status(200).json({
          message: "partenaire updated successfully",
          partenaire: partenaire,
        });
      } else {
        res.status(404).json({
          message: "partenaire not found",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
});


module.exports = router;
