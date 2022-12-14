const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const activeRoutes = require('./active-routes');
const heartRoutes = require('./heart-routes.js');
const stepsRoutes = require('./steps-routes.js');
const distanceRoutes = require('./distance-routes.js');

router.use('/', homeRoutes);
router.use('/active', activeRoutes);
router.use('/heart', heartRoutes);
router.use('/api', apiRoutes);
router.use('/steps', stepsRoutes);
router.use('/distance', distanceRoutes);



module.exports = router;