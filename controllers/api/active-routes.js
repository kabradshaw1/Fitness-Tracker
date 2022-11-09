const router = require('express').Router();
const { Active, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Active.findAll({
    attributes: [
      'id',
      'qty',
      'date',
      // 'chart'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbActiveData => res.json(dbActiveData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Active.create({
    user_id: req.session.user_id,
    qty: req.body.qty,
    date: req.body.date
  })
  .then(dbActiveData => res.json(dbActiveData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Active.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbActiveData => {
    if (!dbActiveData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbActiveData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;