const express = require("express"); //import module express
const bodyParser = require("body-parser"); //import module body-parser
const mongoose = require("mongoose"); //import module mongoose
const cors = require("cors");
const path = require("path");
// creation Applic express
const app = express();
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(cors())

mongoose.set('strictQuery', false);
// MongoDB connection string
const connectionString = 'mongodb://127.0.0.1:27017/erasmus';

// Connect to MongoDB
mongoose.connect(connectionString).then(() => {
  console.log('Connected to MongoDB');
  // Start your application or perform database operations here
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
  });
  let ProjectRouter=require("./routes/project")
  let PartenaireRouter=require("./routes/partenaire")
  let TeamRouter=require("./routes/team")
  let EventRouter=require("./routes/event")
  let ContactRouter=require("./routes/contact")
  app.use("/project",ProjectRouter)
  app.use("/partenaire",PartenaireRouter)
  app.use("/team",TeamRouter)
  app.use("/event",EventRouter)
  app.use("/contact",ContactRouter)

  module.exports = app;