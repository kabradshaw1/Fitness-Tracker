const router = require('express').Router();
const { User } = require('../models');

router.get('/', (req, res) => {
  User.findOne({
    where: {
      id:req.session.id
    },
    attributes: [
      'username'
    ]

  })
  res.render('homepage', {loggedIn: req.session.loggedIn})
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
  });

module.exports = router;