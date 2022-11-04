const { Heart } = require('../models');

const heartData = [
  {
    user_id: 1,
    date : "2022-09-28 00:00:00 -0400",
    qty : 112
  },
  {
    user_id: 1,
    qty : 112,
    date : "2022-09-29 00:00:00 -0400"
  },
  {
    user_id: 1,
    date : "2022-09-30 00:00:00 -0400",
    qty : 139
  },
  {
    user_id: 1,
    qty : 149,
    date : "2022-10-01 00:00:00 -0400",

  },
  {
    user_id: 1,
    qty : 139,
    date : "2022-10-02 00:00:00 -0400",
  },
  {
    user_id: 1,
    qty : 123.99999999999999,
    date : "2022-10-03 00:00:00 -0400"
  },
  {
    user_id: 1,
    qty : 160,
    date : "2022-10-04 00:00:00 -0400"
  },
  {
    user_id: 1,
    date : "2022-10-05 00:00:00 -0400",
    qty : 143
  },
  {
    user_id: 1,
    qty : 138,
    date : "2022-10-06 00:00:00 -0400"
  },
  {
    user_id: 1,
    date : "2022-10-07 00:00:00 -0400",
    qty : 112,
  },
  {
    user_id: 1,
    date : "2022-10-08 00:00:00 -0400",
    qty : 119
  },
  {
    user_id: 1,
    date : "2022-10-09 00:00:00 -0400",
    qty : 121,
  },
  {
    user_id: 1,
    qty : 146,
    date : "2022-10-10 00:00:00 -0400",
  },
  {
    user_id: 1,
    date : "2022-10-11 00:00:00 -0400",
    qty : 128
  },
  {
    user_id: 1,
    date : "2022-10-12 00:00:00 -0400",
    qty : 113,
  },
  {
    user_id: 1,
    qty : 116,
    date : "2022-10-13 00:00:00 -0400"
  }
]

const seedHeart = () => Heart.bulkCreate(heartData);

module.exports = seedHeart;