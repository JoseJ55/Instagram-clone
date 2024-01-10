const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Follows extends Model{};

Follows.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        follower_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type:DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'follows',
    }
);

module.exports = Follows;