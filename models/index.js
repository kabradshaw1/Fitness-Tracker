const Heart = require('./Heart.js');
const Steps = require('./Steps');
const Weight = require('./Weight');
const User = require('./User')

User.hasMany(Heart, {
  foreignKey: 'user_id'
});

Heart.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
})

module.exports = { Heart, Steps, Weight, User};