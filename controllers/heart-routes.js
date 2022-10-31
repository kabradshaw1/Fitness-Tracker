const router = require('express').Router();
const { Heart, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Heart.findAll({
    attributes: [
      'id',
      'max',
      'min',
      'date',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbheartData => {
    const heart_rate = dbheartData.map(heart => heart.get({ plain: true }));

    res.render('heart', {
      heart_rate,
      loggedIn: req.session.loggedIn
    });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});