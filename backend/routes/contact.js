const express = require("express");
const contact = require('../model/contactSchema');
const router = express.Router();










// Add message
router.post('/',async (req, res) => {
    console.log(req.body);
    const Contact = new contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });

    console.log(Contact);
    Contact.save()
      .then((Contact) => {
        res.status(200).json({ message: "message envoyee" });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  }


);


module.exports = router;