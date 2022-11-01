const seedHeart = require('./heart-seeds');
const seedUsers = require('./user-seeds');
const seedSteps = require('./steps-seeds');
const sequelize = require('../config/connection');
const seedActive = require('./active-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers(); 
  console.log('--------------');
  await seedHeart();
  console.log('--------------');
  await seedSteps();
  console.log('--------------');
  await seedActive();
  console.log('--------------');
  process.exit(0);
};

seedAll();