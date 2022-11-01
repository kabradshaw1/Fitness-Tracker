const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const activeRoutes = require('./active-routes')
const heartRoutes = require('./heart-routes.js');
const stepsRoutes = require('./steps-routes.js');

router.use('/', homeRoutes);
router.use('/active', activeRoutes);
router.use('/heart', heartRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/steps', stepsRoutes);


module.exports = router;