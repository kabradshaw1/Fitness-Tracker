const Heart = require('./Heart');
const User = require('./User');
<<<<<<< HEAD
const Steps = require('./Steps');
=======
const Active = require('./Active');
>>>>>>> 899a1e201e408d608f69654790bb83d907831fa4

User.hasMany(Heart, {
  foreignKey: 'user_id'
});

User.hasMany(Steps, {
  foreignKey: 'user_id'
});

Heart.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

<<<<<<< HEAD
Steps.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
})

module.exports = { Heart, User, Steps };
=======
User.hasMany(Active, {
  foreignKey: 'user_id'
});

Active.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

module.exports = { Heart, User, Active };
>>>>>>> 899a1e201e408d608f69654790bb83d907831fa4
