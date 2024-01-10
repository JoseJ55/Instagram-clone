const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Feed extends Model{};

Feed.init(
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
        modelName: 'feed',
    }
);

module.exports = Feed;