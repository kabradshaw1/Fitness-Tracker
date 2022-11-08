const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Active extends Model {}

Active.init(
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

    chart: {
      type: DataTypes.STRING,
      

    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInteger: true
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
    modelName: 'active'
  }
)

module.exports = Active;