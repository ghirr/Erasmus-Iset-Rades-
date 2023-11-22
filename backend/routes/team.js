const express = require("express");
const multer = require("multer");
const team = require('../model/teamSchema');
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
    cb(null, "backend/images/team");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-team-" + "." + extension;
    cb(null, imgName);
  },
});

// Add Team
router.post(
  "/",
  multer({ storage: storage }).single("image"),
  async (req, res) => {
    console.log(req.body);
    let url = req.protocol + "://" + req.get("host");
    const Team = new team({
        name: req.body.name,
        profession: req.body.profession,
        description: req.body.description,
        email: req.body.email,
      image: url + "/images/team/" + req.file?.filename,
    });

    console.log(Team);
    Team.save()
      .then((Team) => {
        res.status(200).json({ message: "team added" });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  }
);
//   trait logique get all team
router.get("/", (req, res) => {
    team.find().populate().then((findedObject) => {
    res.status(200).json({
      team: findedObject,
      
    });
  });
});
//   trait logique delete team
router.delete("/:id", (req, res) => {
  console.log("here into delete", req.params.id);
  team.deleteOne({ _id: req.params.id }).then(() => {
    res.status(200).json({
      message: "team deleted",
    });
  });
});
//   trait logique get team by Id
router.get("/:id", (req, res) => {
  console.log("here into get team by id", req.params.id);
  team.findOne({ _id: req.params.id }).then((data) => {
    res.status(200).json({
      team: data,
    });
  });
});
//trait update team

router.put("/:id", multer({ storage: storage }).single("image"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const updatedTeam = {
    name: req.body.name,
    profession: req.body.profession,
    email: req.body.email,
    description: req.body.description,
    image: url + "/images/team/" + req.file.filename,
  };

  team.findOneAndUpdate(
    { _id: req.params.id },
    updatedTeam,
    { new: true }
  )
    .then((team) => {
      if (team) {
        res.status(200).json({
          message: "team updated successfully",
          team: team,
        });
      } else {
        res.status(404).json({
          message: "team not found",
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
