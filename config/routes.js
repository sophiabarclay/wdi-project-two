const exhibitionController = require('../controllers/exhibitionController');
const authController = require('../controllers/authController');
const ratingsController = require('../controllers/ratingsController');
const secureRoute = require('../lib/secureRoute');
const router = require('express').Router();

router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);
router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);
router.get('/logout', authController.logoutRoute);

router.post('/exhibitions/:id/ratings', secureRoute, ratingsController.createRating);
router.delete('/exhibitions/:id/ratings/:ratingId', secureRoute, ratingsController.deleteRating);

router.get('/', exhibitionController.indexRoute);
router.get('/exhibitions/new', secureRoute, exhibitionController.newRoute);
router.post('/exhibitions', secureRoute, exhibitionController.createRoute);
router.get('/exhibitions/:id', exhibitionController.showRoute);
router.put('/exhibitions/:id', secureRoute, exhibitionController.updateRoute);
router.get('/exhibitions/:id/edit', secureRoute, exhibitionController.editRoute);
router.delete('/exhibitions/:id', secureRoute, exhibitionController.deleteRoute);


module.exports = router;
