const router = require('express').Router();
const { Steps, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Steps.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'qty',
      'date',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbstepsData => {
    const step_count = dbstepsData.map(steps => steps.get({ plain: true }));
    res.render('steps', { step_count, loggedIn: true });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;