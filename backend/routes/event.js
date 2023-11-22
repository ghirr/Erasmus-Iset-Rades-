const express = require("express");
const multer = require("multer");
const event = require('../model/eventSchema');
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
    cb(null, "backend/images/events");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-event-" + "." + extension;
    cb(null, imgName);
  },
});

// Add event
router.post(
  "/",
  multer({ storage: storage }).single("image"),
  async (req, res) => {
    console.log(req.body);
    let url = req.protocol + "://" + req.get("host");
    const Event = new event({
        name: req.body.name,
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateDebut,
        description: req.body.description,
      image: url + "/images/events/" + req.file?.filename,
    });

    console.log(Event);
    Event.save()
      .then((Event) => {
        res.status(200).json({ message: "Event added" });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  }
);
//   trait logique get all events
router.get("/", (req, res) => {
    event.find().populate().then((findedObject) => {
    res.status(200).json({
        events: findedObject,
      
    });
  });
});
//   trait logique delete event
router.delete("/:id", (req, res) => {
  console.log("here into delete", req.params.id);
  event.deleteOne({ _id: req.params.id }).then(() => {
    res.status(200).json({
      message: "event deleted",
    });
  });
});
//   trait logique get event by Id
router.get("/:id", (req, res) => {
  console.log("here into get partenaire by id", req.params.id);
  event.findOne({ _id: req.params.id }).then((data) => {
    res.status(200).json({
      event: data,
    });
  });
});
//trait update event

router.put("/:id", multer({ storage: storage }).single("image"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const updatedEvent = {
    name: req.body.name,
    dateDebut: req.body.dateDebut,
    dateFin: req.body.dateFin,
    email: req.body.email,
    description: req.body.description,
    image: url + "/images/events/" + req.file.filename,
  };

  event.findOneAndUpdate(
    { _id: req.params.id },
    updatedEvent,
    { new: true }
  )
    .then((event) => {
      if (event) {
        res.status(200).json({
          message: "event updated successfully",
          event: event,
        });
      } else {
        res.status(404).json({
          message: "event not found",
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
