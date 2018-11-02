const mongoose = require('mongoose');

const upcomingSchema = mongoose.Schema({
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

const upcomingModel = mongoose.model('Upcoming', upcomingSchema);

module.exports = upcomingModel;
