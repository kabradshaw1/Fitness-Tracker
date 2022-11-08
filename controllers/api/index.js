const router = require('express').Router();

const heartRoutes = require('./heart-routes');
const userRoutes = require('./user-routes')
const activeRoutes = require('./active-routes')
const stepsRoutes = require('./steps-routes');
const distanceRoutes = require('./distance-routes');


router.use('/heart', heartRoutes);
router.use('/user', userRoutes)
router.use('/active', activeRoutes)
router.use('/steps', stepsRoutes);
router.use('/distance', distanceRoutes);


module.exports = router;