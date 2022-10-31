const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const heartRoutes = require('./heart-routes.js');

router.use('/', homeRoutes);
router.use('/heart', heartRoutes);
router.use('/api', apiRoutes);

module.exports = router;