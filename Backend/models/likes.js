const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Likes extends Model{};

Likes.init(
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
        post_id: {
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
        modelName: 'likes',
    }
);

module.exports = Likes;