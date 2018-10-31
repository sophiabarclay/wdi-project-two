const User = require('../models/user');

function checkAuthStatus(req, res, next) {
  console.log('Incoming request', req.method, req.originalUrl);
  if (req.session.userId) {
    User.findById(req.session.userId)
      .then(user => {
        res.locals.currentUser = user;
        res.locals.isLoggedIn = true;
        console.log('user is logged in');
        next();
      });
  } else {
    console.log('user is logged out');
    next();
  }
}

module.exports = {
  checkAuthStatus: checkAuthStatus
};
