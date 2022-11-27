const router = require('express').Router();
const { Heart, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Heart.findAll({
    where: { user_id: req.session.user_id },
    attributes: ['id','qty','date'],
    include: [ { model: User,  attributes: ['username'] } ]
  })
    .then(dbheartData => {
      const heart_rate = dbheartData.map(heart => heart.get({ plain: true }));
      res.render('heart', { heart_rate, loggedIn: true, user: req.session.username });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;