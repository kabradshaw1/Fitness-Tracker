const router = require('express').Router();

const heartRoutes = require('./heart-routes');
const userRoutes = require('./user-routes')
const stepsRoutes = require('./steps-routes');

router.use('/heart', heartRoutes);
router.use('/user', userRoutes);
router.use('/steps', stepsRoutes)

module.exports = router;