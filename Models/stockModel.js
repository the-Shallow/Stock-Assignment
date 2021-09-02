const mongoose = require('mongoose');

const stockSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Stock must have a name"],
  },
  last: {
    type: String,
    required: [true, "A stock must have a last price"],
  },
  buy: {
    type: String,
    required: [true, "A stock must have a buy price"],
  },
  sell: {
    type: String,
    required: [true, "A stock must have a sell price"],
  },
  volume: {
    type: String,
    required: [true, "A stock must have a volume"],
  },
  base_unit: {
    type: String,
    required: [true, "A stock must have a base_unit"],
  },
});

const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock