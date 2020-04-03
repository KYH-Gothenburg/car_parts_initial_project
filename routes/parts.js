var express = require('express');
var router = express.Router();
var da_parts = require('../data_access/parts_da');

router.get('/', function(req, res, next) {
  res.render('parts_add', {title: "Add car parts"});
});

router.post('/', function(req, res, next) {
  var part_name = req.body['part_name'];
  var part_model = req.body['part_model'];
  var model_year = req.body['model_year'];
  var amount_in_stock = req.body['amount_in_stock'];
  var manufacturer_name = req.body['manufacturer_name'];
  var manufacturer_street_address = req.body['manufacturer_street_address'];
  var manufacturer_zip = req.body['manufacturer_zip'];
  var manufacturer_city = req.body['manufacturer_city'];
  var manufacturer_phone_number = req.body['manufacturer_phone_number'];
  var manufacturer_email = req.body['manufacturer_email'];
  var manufacturer_contact_person_name = req.body['manufacturer_contact_person_name'];
  var manufacturer_contact_person_email = req.body['manufacturer_contact_person_email'];
  var manufacturer_contact_person_phone_number = req.body['manufacturer_contact_person_phone_number'];
  
  da_parts.savePart(
    {
      part_name: part_name,
      part_model: part_model,
      model_year: model_year,
      amount_in_stock: amount_in_stock,
      manufacturer: {
          name: manufacturer_name,
          street_address: manufacturer_street_address,
          zip: manufacturer_zip,
          city: manufacturer_city,
          phone_number: manufacturer_phone_number,
          email: manufacturer_email,
          contact_person: {
              name: manufacturer_contact_person_name,
              email: manufacturer_contact_person_email,
              phone_number: manufacturer_contact_person_phone_number
          }
      }
    },
    function(err) {
      res.render('save_done', {title: 'Data saved'});
    }
  )
});

module.exports = router;
