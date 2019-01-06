const Exhibition = require('../models/exhibition');

function createRating(req, res) {
  Exhibition
    .findById(req.params.id)
    .then(exhibition => {
      console.log('found this =>', exhibition);
      exhibition.ratings.push(req.body);
      exhibition.save().then(exhibition => res.redirect(`/exhibitions/${exhibition.id}`)) ;
    });
}

function deleteRating(req, res) {
  console.log('deleting rating', req.params);
  Exhibition
    .findById(req.params.id)
    .then(exhibition => {
      exhibition.ratings.id(req.params.ratingId).remove();
      exhibition
        .save()
        .then(() => res.redirect(`/exhibitions/${req.params.id}`));
    });
}

module.exports = {
  createRating: createRating,
  deleteRating: deleteRating
};

// Line 15 findByIdAndDelete -> findById
