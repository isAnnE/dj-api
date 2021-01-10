'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musicalgenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Musicalgenre.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allNull: false,
        unique: true,
        validate: {
          notNull: true,
          len: [2, 50],
        },

      },
      created_at: {
        name: created_at,
        type: DataTypes.DATEONLY,
      },
      updated_at: {
        name: updated_at,
        type: DataTypes.DATEONLY,
      }
    },


    {
      sequelize,
      modelName: 'Musicalgenre',
    });
  return Musicalgenre;
};