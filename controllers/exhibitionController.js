const Exhibition = require('../models/exhibition');

// INDEX
function indexRoute(req, res) {
  Exhibition
    .find()
    .then(result => {
      const exhibitionObject = {
        exhibitions: result
      };
      res.render('exhibitions/index', exhibitionObject);
    });
}

// SHOW
function showRoute(req, res) {
  Exhibition
    .findById(req.params.id)
    .then(result => {
      res.render('exhibitions/show', result);
    });
}

// NEW
function newRoute(req, res) {
  res.render('exhibitions/new');
}

// CREATE
function createRoute(req, res) {
  Exhibition
    .create(req.body)
    .then(result => res.redirect(`/cocktails/${result._id}`));
}

// UPDATE
function updateRoute(req, res) {
  console.log(`Updating building id ${req.params.id}`, req.body);
  Exhibition
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/');
    });
}

// EDIT
function editRoute(req, res) {
  Exhibition
    .findById(req.params.id)
    .then(result => {
      res.render('exhibitions/edit', result);
    });
}

// DELETE
function deleteRoute(req, res) {
  Exhibition
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/exhibitions');
    });
}

module.exports = {
  indexRoute: indexRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  showRoute: showRoute,
  updateRoute: updateRoute,
  editRoute: editRoute,
  deleteRoute: deleteRoute
};
