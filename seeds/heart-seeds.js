const { Heart } = require('../models');

const heartData = [
  {
    user_id: 1,
    date : "2022-09-28 00:00:00 -0400",
    max : 112
  },
  {
    user_id: 1,
    max : 112,
    date : "2022-09-29 00:00:00 -0400"
  },
  {
    user_id: 1,
    date : "2022-09-30 00:00:00 -0400",
    max : 139
  },
  {
    user_id: 1,
    max : 149,
    date : "2022-10-01 00:00:00 -0400",

  },
  {
    user_id: 1,
    max : 139,
    date : "2022-10-02 00:00:00 -0400",
  },
  {
    user_id: 1,
    max : 123.99999999999999,
    date : "2022-10-03 00:00:00 -0400"
  },
  {
    user_id: 1,
    max : 160,
    date : "2022-10-04 00:00:00 -0400"
  },
  {
    user_id: 1,
    date : "2022-10-05 00:00:00 -0400",
    max : 143
  },
  {
    user_id: 1,
    max : 138,
    date : "2022-10-06 00:00:00 -0400"
  },
  {
    user_id: 1,
    date : "2022-10-07 00:00:00 -0400",
    max : 112,
  },
  {
    user_id: 1,
    date : "2022-10-08 00:00:00 -0400",
    max : 119
  },
  {
    user_id: 1,
    date : "2022-10-09 00:00:00 -0400",
    max : 121,
  },
  {
    user_id: 1,
    max : 146,
    date : "2022-10-10 00:00:00 -0400",
  },
  {
    user_id: 1,
    date : "2022-10-11 00:00:00 -0400",
    max : 128
  },
  {
    user_id: 1,
    date : "2022-10-12 00:00:00 -0400",
    max : 113,
  },
  {
    user_id: 1,
    max : 116,
    date : "2022-10-13 00:00:00 -0400"
  }
]

const seedHeart = () => Heart.bulkCreate(heartData);

module.exports = seedHeart;