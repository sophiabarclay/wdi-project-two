const exhibitionController = require('../controllers/exhibitionController');
const authController = require('../controllers/authController');
const commentsController = require('../controllers/commentsController');
const router = require('express').Router();

router.get('/', exhibitionController.indexRoute);
router.get('/exhibitions/new', exhibitionController.newRoute);
router.post('/exhibitions', exhibitionController.createRoute);
router.get('/exhibitions/:id', exhibitionController.showRoute);
router.put('/exhibitions/:id', exhibitionController.updateRoute);
router.get('/exhibitions/:id/edit', exhibitionController.editRoute);
router.delete('/exhibitions/:id', exhibitionController.deleteRoute);

router.post('/exhibitions/:id/comments', commentsController.createComment);
router.delete('/exhibitions/:id/comments/:id', commentsController.deleteComment);

router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);
router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);
router.get('/logout', authController.logoutRoute);

module.exports = router;
