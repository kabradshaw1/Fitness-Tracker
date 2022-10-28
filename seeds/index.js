const seedUsers = require('./user-seeds');
const seedHeart = require('./heart-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers(); 

  await seedHeart();

  process.exit(0);
};

seedAll();