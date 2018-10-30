const Exhibition = require('../models/exhibition');

function indexRoute(req, res) {
  Exhibition
    .find()
    .then(result => {
      const exhibitionObject = {
        exhibitions: result
      };
      console.log('===>', exhibitionObject);
      res.render('exhibitions/index', exhibitionObject);
    });
}

function showRoute(req, res) {
  Exhibition
    .findById(req.params.id)
    .then(result => {
      res.render('exhibitions/show', result);
    });
}


module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute
};
