const router = require('express').Router();

const heartRoutes = require('./heart-routes');

router.use('/heart', heartRoutes);

module.exports = router;