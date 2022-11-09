const router = require('express').Router();
const { Steps, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Steps.findAll({
    attributes: [
      'id',
      'qty',
      'date'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbStepsData => res.json(dbStepsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
  Steps.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'qty',
      'date'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbStepsData => res.json(dbStepsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Steps.create({
    qty: req.body.qty,
    user_id: req.session.user_id,
    date: req.body.date,
  })
  .then(dbStepsData => res.json(dbStepsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Steps.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbStepsData => {
    if (!dbStepsData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbStepsData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;