const { User } = require('../models');

const userdata = [
  { 
    username: 'Kyle',
    email: 'email@email.com',
    password: 'password123'
  },
  {
    username: 'Rashad',
    email: 'email1@email.com',
    password: 'password123'
  }, 
  {
    username: 'Deanna',
    email: 'email3@email.com',
    password: 'password123'
  },
  {
    username: 'Mike',
    email: 'email2@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;