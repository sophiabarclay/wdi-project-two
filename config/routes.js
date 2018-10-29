const exhibitionController = require('./config/exhibitionController');
// const authcontroller = require('./config/authController');
const router = require('express').router();

router.get('/', exhibitionController.indexRoute);

module.exports = router;
