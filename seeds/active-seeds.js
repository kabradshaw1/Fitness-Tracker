
const { Active } = require('../models');

const activeData = [
{
  user_id: 1,
  qty : 862,
  date : "2022-09-28 00:00:00 -0400"
},
{
  user_id: 1,
  date : "2022-09-29 00:00:00 -0400",
  qty : 659
},
{
  user_id: 1,
  qty : 1467,
  date : "2022-09-30 00:00:00 -0400"
},
{
  user_id: 1,
  date : "2022-10-01 00:00:00 -0400",
  qty : 2086
},
{
  user_id: 1,
  date : "2022-10-02 00:00:00 -0400",
  qty : 1231
},
{
  user_id: 1,
  date : "2022-10-03 00:00:00 -0400",
  qty : 823
},
{
  user_id: 1,
  qty : 1410,
  date : "2022-10-04 00:00:00 -0400"
},
{
  user_id: 1,
  date : "2022-10-05 00:00:00 -0400",
  qty : 868
},
{
  user_id: 1,
  date : "2022-10-06 00:00:00 -0400",
  qty : 865
},
{
  user_id: 1,
  qty : 960,
  date : "2022-10-07 00:00:00 -0400"
},
{
  user_id: 1,
  qty : 966,
  date : "2022-10-08 00:00:00 -0400"
},
{
  user_id: 1,
  qty : 569,
  date : "2022-10-09 00:00:00 -0400"
},
{
  user_id: 1,
  date : "2022-10-10 00:00:00 -0400",
  qty : 979
},
{
  user_id: 1,
  qty : 899,
  date : "2022-10-11 00:00:00 -0400"
},
{
  user_id: 1,
  date : "2022-10-12 00:00:00 -0400",
  qty : 748
},
{
  user_id: 1,
  qty : 814,
  date : "2022-10-13 00:00:00 -0400"
},
{
  user_id: 1,
  date : "2022-10-14 00:00:00 -0400",
  qty : 2342
},
{
  user_id: 1,
  date : "2022-10-15 00:00:00 -0400",
  qty : 787
},
{
  user_id: 1,
  date : "2022-10-16 00:00:00 -0400",
  qty : 709
},
{
  user_id: 1,
  date : "2022-10-17 00:00:00 -0400",
  qty : 1559
},
{
  user_id: 1,
  qty : 1702,
  date : "2022-10-18 00:00:00 -0400"
},
{
  user_id: 1,
  date : "2022-10-19 00:00:00 -0400",
  qty : 1942
},
{
  user_id: 1,
  date : "2022-10-20 00:00:00 -0400",
  qty : 1774
},
{
  user_id: 1,
  date : "2022-10-21 00:00:00 -0400",
  qty : 1039
},
{
  user_id: 1,
  qty : 0,
  date : "2022-10-22 00:00:00 -0400"
}
]

const seedActive = () => Active.bulkCreate(activeData);

module.exports = seedActive;