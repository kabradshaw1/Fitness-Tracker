const router = require('express').Router();
const { Steps, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Steps.findAll({
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

    res.render('steps', {
      step_count,
      loggedIn: req.session.loggedIn
    });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});