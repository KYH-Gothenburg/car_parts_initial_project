const Parts = require("../models/parts");
const mongoose = require("mongoose");

function connect2db() {
  mongoose.connect("mongodb://localhost:27017/car_parts", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection
    .once("open", function() {
      console.log("Connection to MongoDB made...");
    })
    .on("error", function(error) {
      console.log("Error connecting to MongoDB. Error:", error);
    });
}

function savePart(p, cb) {
    connect2db();
    let part = new Parts(p);
    part.save(function(err) {
        cb(err);
    });
}

module.exports = {
    savePart: savePart
}