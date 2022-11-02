const seedHeart = require('./heart-seeds');
const seedUsers = require('./user-seeds');
const seedDistance = require('./distance-seeds');
const seedSteps = require('./steps-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers(); 
  console.log('--------------');
  await seedHeart();
  console.log('--------------');
  await seedDistance();
  await seedSteps();
  console.log('--------------');
  
  process.exit(0);
};

seedAll();