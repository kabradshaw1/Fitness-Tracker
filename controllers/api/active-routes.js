const router = require('express').Router();
const { Active, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Active.findAll({
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
    .then(dbActiveData => res.json(dbActiveData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
  Active.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'date',
      'qty'
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