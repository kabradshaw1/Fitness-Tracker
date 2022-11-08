const { Heart } = require('../models');

const heartData = [
  {
    user_id: 1,
    // chart: 'heart',
    date : "2022-09-28 00:00:00 -0400",
    qty : 112
  },
  {
    user_id: 1,
    qty : 112,
    // chart: 'heart',
    date : "2022-09-29 00:00:00 -0400"
  },
  {
    user_id: 1,
    // chart: 'heart',
    date : "2022-09-30 00:00:00 -0400",
    qty : 139
  },
  {
    user_id: 1,
    qty : 149,
    // chart: 'heart',
    date : "2022-10-01 00:00:00 -0400",

  },
  {
    user_id: 1,
    qty : 139,
    // chart: 'heart',
    date : "2022-10-02 00:00:00 -0400",
  },
  {
    user_id: 1,
    qty : 124,
    // chart: 'heart',
    date : "2022-10-03 00:00:00 -0400"
  },
  {
    user_id: 1,
    qty : 160,
    date : "2022-10-04 00:00:00 -0400",
    // chart: 'heart',
  },
  {
    user_id: 1,
    date : "2022-10-05 00:00:00 -0400",
    // chart: 'heart',
    qty : 143
  },
  {
    user_id: 1,
    qty : 138,
    // chart: 'heart',
    date : "2022-10-06 00:00:00 -0400"
  },
  {
    user_id: 1,
    date : "2022-10-07 00:00:00 -0400",
    // chart: 'heart',
    qty : 112,
  },
  {
    user_id: 1,
    date : "2022-10-08 00:00:00 -0400",
    // chart: 'heart',
    qty : 119
  },
  {
    user_id: 1,
    date : "2022-10-09 00:00:00 -0400",
    // chart: 'heart',
    qty : 121,
  },
  {
    user_id: 1,
    qty : 146,
    // chart: 'heart',
    date : "2022-10-10 00:00:00 -0400",
  },
  {
    user_id: 1,
    date : "2022-10-11 00:00:00 -0400",
    // chart: 'heart',
    qty : 128
  },
  {
    user_id: 1,
    date : "2022-10-12 00:00:00 -0400",
    // chart: 'heart',
    qty : 113,
  },
  {
    user_id: 1,
    qty : 116,
    // chart: 'heart',
    date : "2022-10-13 00:00:00 -0400"
  }
]

const seedHeart = () => Heart.bulkCreate(heartData);

module.exports = seedHeart;