const { Distance } = require('../models');

const distanceData = [
    {
		user_id: 1,
		chart: 'distance',
		date : "2022-09-28 00:00:00 -0400",
		qty : 7.3262770420745751
		},
	{
		user_id: 1,
		chart: 'distance',
		date : "2022-09-29 00:00:00 -0400",
		qty : 7.7253340491539415
	},
	{
		user_id: 1,
		chart: 'distance',
		date : "2022-09-30 00:00:00 -0400",
		qty : 4.2209483071353038
	},
	{
		user_id: 1,
		chart: 'distance',
		date : "2022-10-01 00:00:00 -0400",
		qty : 8.0438488949899067
	},
	{
		user_id: 1,
		chart: 'distance',
		date : "2022-10-02 00:00:00 -0400",
		qty : 3.4177528235106047
	},
	{
		user_id: 1,
		chart: 'distance',
		date : "2022-10-03 00:00:00 -0400",
		qty : 7.3761607225252686
	},
	{
		user_id: 1,
		chart: 'distance',
		qty : 6.4425008044564098,
		date : "2022-10-04 00:00:00 -0400"
	},
	{
		user_id: 1,
		chart: 'distance',
		qty : 6.2098345661339289,
		date : "2022-10-05 00:00:00 -0400"
	},
	{
		user_id: 1,
		chart: 'distance',
		qty : 0.43932845174995822,
		date : "2022-10-06 00:00:00 -0400"
	},
	{
		user_id: 1,
		chart: 'distance',
		qty : 0.081169718842761529,
		date : "2022-10-07 00:00:00 -0400"
	},
	{
		user_id: 1,
		chart: 'distance',
		date : "2022-10-08 00:00:00 -0400",
		qty : 6.6601484828608024
	},
	{
		user_id: 1,
		chart: 'distance',
		qty : 5.4945804004673358,
		date : "2022-10-09 00:00:00 -0400"
	},
	{
		user_id: 1,
		chart: 'distance',
		date : "2022-10-10 00:00:00 -0400",
		qty : 7.7038097510544699
	},
	{
		user_id: 1,
		chart: 'distance',
		date : "2022-10-11 00:00:00 -0400",
		qty : 7.8954157718932727
	},
	]

const seedDistance = () => Distance.bulkCreate(distanceData);

module.exports = seedDistance;