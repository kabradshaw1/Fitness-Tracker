const { Steps } = require('../models');

const stepsData = [
    {
      user_id: 1,
      //chart: 'steps',
      date : "2022-09-28 00:00:00 -0400",
      qty : 12782
    },
    {
      user_id: 1,
      //chart: 'steps',
      qty : 14614,
      date : "2022-09-29 00:00:00 -0400"
    },
    {
      user_id: 1,
      //chart: 'steps',
      qty : 8178,
      date : "2022-09-30 00:00:00 -0400"
    },
    {
			user_id: 1,
      //chart: 'steps',
      qty : 13826,
      date : "2022-10-01 00:00:00 -0400"
    },
    {
			user_id: 1,
      //chart: 'steps',
      date : "2022-10-02 00:00:00 -0400",
      qty : 6516
    },
    {
			user_id: 1,
      //chart: 'steps',
      date : "2022-10-03 00:00:00 -0400",
      qty : 13082
    },
    {
			user_id: 1,
      //chart: 'steps',
      qty : 12632,
      date : "2022-10-04 00:00:00 -0400"
    },
    {
			user_id: 1,
      //chart: 'steps',
      qty : 12043,
      date : "2022-10-05 00:00:00 -0400"
    },
    {
			user_id: 1,
      //chart: 'steps',
      date : "2022-10-06 00:00:00 -0400",
      qty : 12153
    },
    {
			user_id: 1,
      //chart: 'steps',
      date : "2022-10-07 00:00:00 -0400",
      qty : 14820
    },
    {
			user_id: 1,
      //chart: 'steps',
      date : "2022-10-08 00:00:00 -0400",
      qty : 12885
    },
    {
			user_id: 1,
      //chart: 'steps',
      qty : 8659,
      date : "2022-10-09 00:00:00 -0400"
    },
    {
			user_id: 1,
      //chart: 'steps',
      qty : 13446,
      date : "2022-10-10 00:00:00 -0400"
    },
    {
			user_id: 1,
      //chart: 'steps',
      date : "2022-10-11 00:00:00 -0400",
      qty : 1461
    },
    {
			user_id: 1,
      //chart: 'steps',
      qty : 2360,
      date : "2022-10-12 00:00:00 -0400"
    },
    {
			user_id: 1,
      //chart: 'steps',
      qty : 127,
      date : "2022-10-13 00:00:00 -0400"
    }
  ];

const seedSteps = () => Steps.bulkCreate(stepsData);

module.exports = seedSteps;