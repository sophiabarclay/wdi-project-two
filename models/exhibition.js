const mongoose = require('mongoose');

const exhibitionSchema = mongoose.Schema({
  name: String,
  location: String,
  address: String,
  startDate: String,
  endDate: String,
  image: String,
  ratings: [
    {
      user: String,
      rating: Number,
      content: String
    }
  ]
});

const exhibitionModel = mongoose.model('Exhibition', exhibitionSchema);

module.exports = exhibitionModel;
