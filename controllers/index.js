const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const stepsRoutes = require('./steps-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/steps', stepsRoutes);

module.exports = router;