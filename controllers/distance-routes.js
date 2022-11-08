const router = require('express').Router();
const { Distance, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Distance.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'qty',
      'date',
      'distance'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbdistanceData => {
    const distance_count = dbdistanceData.map(distance => distance.get({ plain: true }));
    res.render('distance', { distance_count, loggedIn: true });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;