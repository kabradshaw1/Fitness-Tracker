const router = require('express').Router();
const { Heart } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {

});

router.post('/', withAuth, (req, res) => {

});

router.delete('/:id', withAuth, (req, res) => {

});

module.exports = router;