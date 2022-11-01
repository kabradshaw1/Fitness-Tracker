const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const activeRoutes = require('./active.routes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/active', activeRoutes);

module.exports = router;