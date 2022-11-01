const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
<<<<<<< HEAD
const stepsRoutes = require('./steps-routes.js');
=======
const activeRoutes = require('./active-routes')
const heartRoutes = require('./heart-routes.js');
>>>>>>> 899a1e201e408d608f69654790bb83d907831fa4

router.use('/', homeRoutes);
<<<<<<< HEAD
router.use('/steps', stepsRoutes);
=======
router.use('/active', activeRoutes);
router.use('/heart', heartRoutes);
router.use('/api', apiRoutes);
>>>>>>> 899a1e201e408d608f69654790bb83d907831fa4

module.exports = router;