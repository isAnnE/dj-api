'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dj extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dj.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    },

    url_name: {
      type: DataTypes.STRING,
      allNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [2, 50],
      }
    },

    name: {
      type: DataTypes.STRING,
      allNull: false,
      validate: {
        notNull: true,
        len: [2, 50],
      }
    },

    biography: {
      type: DataTypes.STRING,
      allNull: false,
      validate: {
        notNull: true,
        len: [20, 1000],
      }
    },

    soundcloud: {
      allNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [2, 1000],
      }
    },
    facebook: {
      allNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [2, 1000]
      }
    },
    instagram: {
      allNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [2, 1000]
      }
    },
    spotify: {
      allNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [2, 1000]
      }
    },
    beatport: {
      allNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [2, 1000]
      }
    },
    mixcloud: {
      allNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [2, 1000]
      }
    },
    youtube: {
      allNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [2, 1000]
      }
    },
    club_id: {
      type: DataTypes.UUID,
      allNull: false,
      references: {
        model: "Clubs",
        key: "id"
      }
    },

    created_at: {
      name: created_at,
      type: DataTypes.DATEONLY,
    },
    updated_at: {
      name: updated_at,
      type: DataTypes.DATEONLY,
    }
  }, {
    sequelize,
    modelName: 'Dj',
  });
  return Dj;
};