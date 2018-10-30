const User = require('../models/user');

function registerFormRoute(req, res) {
  res.render('auth/register');
}

function registerRoute(req, res) {
  User
    .create(req.body)
    .then(user => {
      console.log('Created user', user);
      res.redirect('/');
    });
}

function loginFormRoute(req, res) {
  res.render('auth/login');
}

function loginRoute(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if(!user) {
        res.redirect('/register');
      } else {
        console.log('Loggin in', user);
        req.session.userId = user._id;
        res.redirect('/');
      }
    });
}

function logoutRoute(req, res) {
  req.session.regenerate(function() {
    res.redirect('/');
  });
}

module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute,
  logoutRoute: logoutRoute
};
