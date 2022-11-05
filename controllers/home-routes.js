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
  .then(user =>{
    res.render('homepage', user, {loggedIn: req.session.loggedIn})
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
  });

module.exports = router;