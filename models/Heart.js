const { Model, DataTypes } = require('sequelize');
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
    max: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInteger: true
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'heart'
  }
)

module.exports = Heart;