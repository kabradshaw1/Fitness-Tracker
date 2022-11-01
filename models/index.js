const Heart = require('./Heart');
const User = require('./User');
const Active = require('./Active');

User.hasMany(Heart, {
  foreignKey: 'user_id'
});

Heart.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.hasMany(Active, {
  foreignKey: 'user_id'
});

Active.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

module.exports = { Heart, User, Active };