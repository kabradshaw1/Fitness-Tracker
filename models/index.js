const Heart = require('./Heart');
const User = require('./User')

User.hasMany(Heart, {
  foreignKey: 'user_id'
});

Heart.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
})

module.exports = { Heart, User };