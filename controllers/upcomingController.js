const Upcoming = require('../models/upcoming');

// INDEX
function indexRoute(req, res) {
  Upcoming
    .find()
    .then(result => {
      const upcomingObject = {
        upcomings: result
      };
      res.render('upcoming/index', upcomingObject);
    });
}

// SHOW
function showRoute(req, res) {
  Upcoming
    .findById(req.params.id)
    .then(result => {
      res.render('upcoming/show', result);
    });
}

// NEW
function newRoute(req, res) {
  res.render('upcoming/new');
}

// CREATE
function createRoute(req, res) {
  Upcoming
    .create(req.body)
    .then(result => res.redirect(`/upcoming/${result._id}`));
}

// UPDATE
function updateRoute(req, res) {
  console.log(`Updating building id ${req.params.id}`, req.body);
  Upcoming
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/');
    });
}

// EDIT
function editRoute(req, res) {
  Upcoming
    .findById(req.params.id)
    .then(result => {
      res.render('upcoming/edit', result);
    });
}

// DELETE
function deleteRoute(req, res) {
  Upcoming
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/');
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
