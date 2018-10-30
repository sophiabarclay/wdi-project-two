const exhibitionController = require('../controllers/exhibitionController');
// const authcontroller = require('./config/authController');
const router = require('express').Router();

router.get('/', exhibitionController.indexRoute);
router.get('/exhibitions/:id', exhibitionController.showRoute);

module.exports = router;
