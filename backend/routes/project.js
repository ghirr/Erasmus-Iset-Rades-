const express = require("express");
const multer = require("multer");
const project = require('../model/projectSchema');
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
    cb(null, "backend/images/projects");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-project-" + "." + extension;
    cb(null, imgName);
  },
});

// Add project
router.post(
  "/",
  multer({ storage: storage }).single("image"),
  async (req, res) => {
    console.log(req.body);
    let url = req.protocol + "://" + req.get("host");
    const Project = new project({
      projectName: req.body.projectName,
      catagorie: req.body.catagorie,
      description: req.body.description,
      dateDebutProject: req.body.dateDebutProject,
      dateFinProject: req.body.dateFinProject,
      image: url + "/images/projects/" + req.file?.filename,
    });

    console.log(Project);
    Project.save()
      .then((Project) => {
        res.status(200).json({ message: "Project added" });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  }
);
//   trait logique get all projects
router.get("/", (req, res) => {
  project.find().populate().then((findedObject) => {
    res.status(200).json({
      projects: findedObject,
      
    });
  });
});
router.get("/ka1", (req, res) => {
  project.find({ catagorie: 'ka1' }).populate().then((findedObject) => {
    res.status(200).json({
      projects: findedObject,
    });
  }).catch((error) => {
    res.status(500).json({ error: error });
  });
});
router.get("/cbhe", (req, res) => {
  project.find({ catagorie: 'cbhe' }).populate().then((findedObject) => {
    res.status(200).json({
      projects: findedObject,
    });
  }).catch((error) => {
    res.status(500).json({ error: error });
  });
});
 //   trait logique delete project
 router.delete("/:id", (req, res) => {
  console.log("here into delete", req.params.id);
  project.deleteOne({ _id: req.params.id }).then(() => {
    res.status(200).json({
      message: "project deleted",
    });
  });
});
//   trait logique get project by Id
router.get("/:id", (req, res) => {
  console.log("here into get project by id", req.params.id);
  project.findOne({ _id: req.params.id }).then((data) => {
    res.status(200).json({
      project: data,
    });
  });
});
//trait update project

router.put("/:id", multer({ storage: storage }).single("image"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const updatedProject = {
    projectName: req.body.projectName,
    catagorie: req.body.catagorie,
    description: req.body.description,
    dateDebutProject: req.body.dateDebutProject,
    dateFinProject: req.body.dateFinProject,
    image: url + "/images/projects/" + req.file.filename,
  };

  project.findOneAndUpdate(
    { _id: req.params.id },
    updatedProject,
    { new: true }
  )
    .then((project) => {
      if (project) {
        res.status(200).json({
          message: "Project updated successfully",
          project: project,
        });
      } else {
        res.status(404).json({
          message: "Project not found",
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
