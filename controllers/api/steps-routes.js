const router = require('express').Router();
const { Steps, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Steps.findAll({
    where: { user_id: req.session.user_id },
    attributes: ['id','qty', 'date'],
    include: [{ model: User,attributes: ['username'] }]
  })
    .then(records => {
      const dbStepsData = records.map(record => record.get({ plain: true }));
      res.json(dbStepsData);
    })
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
    chart: req.body.chart
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
  Steps.destroy({ where: { id: req.params.id } })
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