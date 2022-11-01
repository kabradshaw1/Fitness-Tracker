const Heart = require('./Heart');
const User = require('./User');
const Steps = require('./Steps');

User.hasMany(Heart, {
  foreignKey: 'user_id'
});

User.hasMany(Steps, {
  foreignKey: 'user_id'
});

Heart.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
})

Steps.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
})

module.exports = { Heart, User, Steps };