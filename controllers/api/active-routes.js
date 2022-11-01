const router = require('express').Router();
const { Active, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
  Active.create({
    user_id: req.body.user_id,
    qty: req.body.qty,
    date: req.body.date
  })
  .then(dbActiveData => res.json(dbActiveData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;