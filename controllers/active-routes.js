const router = require('express').Router();
const { Active, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Active.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'qty',
      'date',
      'chart'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbactiveData => {
    const active_rate = dbactiveData.map(active => active.get({ plain: true }));
    res.render('active', { active_rate, loggedIn: true });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;