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

// Mike, you are going to need to add your get route aswell.  It's going to get called
// by the client side js to graph the data.
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