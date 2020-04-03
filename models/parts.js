const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Parts Schema
const PartsSchema = new Schema(
  {
    part_name: String,
    part_model: String,
    model_year: Number,
    amount_in_stock: Number,
    manufacturer: {
        name: String,
        street_address: String,
        zip: String,
        city: String,
        phone_number: String,
        email: String,
        contact_person: {
            name: String,
            email: String,
            phone_number: String
        }
    }
  },
  { collection: "Parts" }
);

// Create model
const Parts = mongoose.model("parts", PartsSchema);

module.exports = Parts;