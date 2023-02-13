const express = require('express')
const router = express.Router()

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customerSchema = require('../modelCustomer');

router.route('/').get((req, res) => {
  customerSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = router;