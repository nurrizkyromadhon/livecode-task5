const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = new Schema(
  {
    name: {
      type: String
    },    
    phone: {
      type: Number
    }
  },
  {
    collection: "customer"
  }
);

module.exports = mongoose.model("customer", customerSchema);