const Exhibition = require('../models/exhibition');

function indexRoute(req, res) {
  Exhibition
    .find()
    .then(result => {
      const exhibitionObject = {
        exhibitions: result
      };
      res.render('index', exhibitionObject);
    });
}


module.exports = {
  indexRoute: indexRoute
};
