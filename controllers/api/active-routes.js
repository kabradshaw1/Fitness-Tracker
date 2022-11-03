const router = require('express').Router();
const { Active, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Mike, you are going to need to add your get route aswell.  It's going to get called
// by the client side js to graph the data.
router.post('/', withAuth, (req, res) => {
  Active.create({
    // please change to user_id: req.session.user_id and delete this comment
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