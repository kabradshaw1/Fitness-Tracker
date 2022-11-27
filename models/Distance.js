const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Distance extends Model {}

Distance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    qty: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'distance',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'distance'
  }
);

module.exports = Distance;