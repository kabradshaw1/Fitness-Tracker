const router = require('express').Router();
const { Heart, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Heart.findAll({
    attributes: [
      'id',
      'max',
      'min',
      'date'
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
      'min',
      'date'
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

});

router.delete('/:id', withAuth, (req, res) => {

});

module.exports = router;