const mongoose = require('mongoose');

const exhibitionSchema = mongoose.Schema({
  name: String,
  location: String,
  address: String,
  image: String,
  ratings: [
    {
      comment: String,
      username: String,
      score: Number
    }
  ]
});

const exhibitionModel = mongoose.model('Exhibition', exhibitionSchema);

module.exports = exhibitionModel;
