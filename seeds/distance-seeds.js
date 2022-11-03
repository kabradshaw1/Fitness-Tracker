const { Distance } = require('../models');

const distanceData = [
    {
		user_id: 1,
		date : "2022-09-28 00:00:00 -0400",
		qty : 7.3262770420745751
		},
	{
		user_id: 1,
		date : "2022-09-29 00:00:00 -0400",
		qty : 7.7253340491539415
	},
	{
		user_id: 1,
		date : "2022-09-30 00:00:00 -0400",
		qty : 4.2209483071353038
	},
	{
		user_id: 1,
		date : "2022-10-01 00:00:00 -0400",
		qty : 8.0438488949899067
	},
	{
		user_id: 1,
		date : "2022-10-02 00:00:00 -0400",
		qty : 3.4177528235106047
	},
	{
		user_id: 1,
		date : "2022-10-03 00:00:00 -0400",
		qty : 7.3761607225252686
	},
	{
		user_id: 1,
		qty : 6.4425008044564098,
		date : "2022-10-04 00:00:00 -0400"
	},
	{
		user_id: 1,
		qty : 6.2098345661339289,
		date : "2022-10-05 00:00:00 -0400"
	},
	{
		user_id: 1,
		qty : 0.43932845174995822,
		date : "2022-10-06 00:00:00 -0400"
	},
	{
		user_id: 1,
		qty : 0.081169718842761529,
		date : "2022-10-07 00:00:00 -0400"
	},
	{
		user_id: 1,
		date : "2022-10-08 00:00:00 -0400",
		qty : 6.6601484828608024
	},
	{
		user_id: 1,
		qty : 5.4945804004673358,
		date : "2022-10-09 00:00:00 -0400"
	},
	{
		date : "2022-10-10 00:00:00 -0400",
		qty : 7.7038097510544699
	},
	{
		date : "2022-10-11 00:00:00 -0400",
		qty : 7.8954157718932727
	},
	{
		user_id: 1,
		qty : 8.5922089994411213,
		date : "2022-10-12 00:00:00 -0400"
	},
	{
		user_id: 1,
		qty : 7.5250661138950967,
		date : "2022-10-13 00:00:00 -0400"
	},
	{
		user_id: 1,
		qty : 3.1443441624996882,
		date : "2022-10-14 00:00:00 -0400"
	},
	{
		user_id: 1,
		date : "2022-10-15 00:00:00 -0400",
		qty : 7.4524791459534327
	},
	{
		user_id: 1,
		qty : 9.7062716237542244,
		date : "2022-10-16 00:00:00 -0400"
	},
	{
		user_id: 1,
		date : "2022-10-17 00:00:00 -0400",
		qty : 12.560167372557002
	},
	{
		user_id: 1,
		date : "2022-10-18 00:00:00 -0400",
		qty : 2.0745160761232171
	},
	{
		user_id: 1,
		date : "2022-10-19 00:00:00 -0400",
		qty : 23.916033737574079
	},
	{
		user_id: 1,
		qty : 12.148543949449689,
		date : "2022-10-20 00:00:00 -0400"
	},
	{
		user_id: 1,
		date : "2022-10-21 00:00:00 -0400",
		qty : 13.109049401503786
	},
	{
		user_id: 1,
		date : "2022-10-22 00:00:00 -0400",
		qty : 2.4259274236825141
	},
	{
		user_id: 1,
		date : "2022-10-23 00:00:00 -0400",
		qty : 6.5687012844833665
	},
	{
		user_id: 1,
		date : "2022-10-24 00:00:00 -0400",
		qty : 6.1303301220864679
	},
	{
		user_id: 1,
		date : "2022-10-25 00:00:00 -0400",
		qty : 2.4583867712559466
	},
	{
		user_id: 1,
		qty : 6.6977812526767861,
		date : "2022-10-26 00:00:00 -0400"
	},
	{
		user_id: 1,
		qty : 4.4209088940025341,
		date : "2022-10-27 00:00:00 -0400"
	},
	{
		user_id: 1,
		date : "2022-10-28 00:00:00 -0400",
		qty : 0.033920653384432814
	}
	]

const seedDistance = () => Distance.bulkCreate(distanceData);

module.exports = seedDistance;