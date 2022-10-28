const { Model, DataTypes } = require('sequalize');
const sequelize = require('../config/connection');

class Heart extends Model {}

Heart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // needs more code
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'heart'
  }
)

module.exports = Heart;