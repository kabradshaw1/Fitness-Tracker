const router = require('express').Router();

const heartRoutes = require('./heart-routes');
const userRoutes = require('./user-routes')

router.use('/heart', heartRoutes);
router.use('/user', userRoutes)

module.exports = router;