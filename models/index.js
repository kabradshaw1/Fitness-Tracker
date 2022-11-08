const Active = require('./Active');
const Heart = require('./Heart');
const User = require('./User');
const Steps = require('./Steps');
const Distance = require('./Distance');

User.hasMany(Heart, {
  foreignKey: 'user_id'
});

Steps.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.hasMany(Distance, {
  foreignKey: 'user_id'
});

Distance.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.hasMany(Steps, {
  foreignKey: 'user_id'
});

Heart.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.hasMany(Distance, {
  foreignKey: 'user_id'
});

Distance.belongsTo(User, {
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

module.exports = { Heart, User, Steps, Active, Distance };