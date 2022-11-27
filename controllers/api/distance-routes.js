const router = require('express').Router();
const { Distance, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Distance.findAll({
    where: { user_id: req.session.user_id },
    attributes: ['id','qty','date'],
    include: [{ model: User, attributes: ['username'] }]
  })
    .then(records => {
      const dbDistanceData = records.map(record => record.get({ plain: true }));
      res.json(dbDistanceData);
    })
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
  })
    .then(newRecord => {
      res.json(newRecord.get({ plain: true }));
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Distance.destroy({ where: { id: req.params.id } })
    .then(deletedRecord => {
      if (!deletedRecord) {
        res.status(404).json({ message: 'No record found with this id' });
        return;
      }
      res.json(deletedRecord.get({ plain: true }));
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;