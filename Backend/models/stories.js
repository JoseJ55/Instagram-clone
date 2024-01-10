const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stories extends Model{};

Stories.init(
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
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        created_at: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        expires_at: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'stories',
    }
);

module.exports = Stories;