const Exhibition = require('../models/exhibition');

function createRating(req, res) {
  Exhibition
    .findById(req.params.exhibitionId)
    .then(exhibition => {
      exhibition.ratings.push(req.body);
      exhibition.save().then(() => res.redirect(`exhibitions/${exhibition.id}`)) ;
    });
}

function deleteRating(req, res) {
  console.log('deleting rating', req.paramas.ratingId);
  Exhibition
    .findByIdAndDelete(req.params.id)
    .then(exhibition => {
      exhibition.ratings.id(req.params.ratingId).remove();
      exhibition.save()
        .then(() => res.redirect(`/exhibitions/${req.params.exhibitionId}`));
    });
}

module.exports = {
  createRating: createRating,
  deleteRating: deleteRating
};
