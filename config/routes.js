const exhibitionController = require('../controllers/exhibitionController');
const authController = require('../controllers/authController');
// const commentsController = require('../controllers/commentsController');
const secureRoute = require('../lib/secureRoute');
const router = require('express').Router();

router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);
router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);
router.get('/logout', authController.logoutRoute);

router.get('/', exhibitionController.indexRoute);
router.get('/exhibitions/new', secureRoute, exhibitionController.newRoute);
router.post('/exhibitions', secureRoute, exhibitionController.createRoute);
router.get('/exhibitions/:id', exhibitionController.showRoute);
router.put('/exhibitions/:id', secureRoute, exhibitionController.updateRoute);
router.get('/exhibitions/:id/edit', secureRoute, exhibitionController.editRoute);
router.delete('/exhibitions/:id', secureRoute, exhibitionController.deleteRoute);

// router.post('/exhibitions/:id/comments', commentsController.createComment);
// router.delete('/exhibitions/:id/comments/:id', commentsController.deleteComment);

module.exports = router;
