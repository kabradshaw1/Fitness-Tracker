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
    max: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    min: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    avg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    }
    
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