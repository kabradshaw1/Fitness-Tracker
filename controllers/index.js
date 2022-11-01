const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const activeRoutes = require('./active-routes')
const heartRoutes = require('./heart-routes.js');

router.use('/', homeRoutes);
router.use('/active', activeRoutes);
router.use('/heart', heartRoutes);
router.use('/api', apiRoutes);

module.exports = router;