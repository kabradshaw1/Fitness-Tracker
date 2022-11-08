const router = require('express').Router();
const { Distance, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Distance.findAll({
    attributes: [
      'id',
      'qty',
      'date'
     // 'distance'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbDistanceData => res.json(dbDistanceData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Distance.create({
    qty: req.body.qty,
    user_id: req.session.user_id,
    date: req.body.date,
   // chart: req.body.chart

  })
  .then(dbDistanceData => res.json(dbDistanceData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Distance.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbDistanceData => {
    if (!dbDistanceData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbDistanceData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;