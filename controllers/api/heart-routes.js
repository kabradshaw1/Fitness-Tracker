const router = require('express').Router();
const { Heart, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Heart.findAll({
    attributes: [
      'id',
      'max',
      'date',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbHeartData => res.json(dbHeartData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
  Heart.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'max',
      'date',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbHeartData => res.json(dbHeartData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Heart.create({
    max: req.body.max,
    user_id: req.session.user_id,
  })
  .then(dbHeartData => res.json(dbHeartData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Heart.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbHeartData => {
    if (!dbHeartData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbHeartData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;