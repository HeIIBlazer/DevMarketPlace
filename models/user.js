const { DataTypes, Model } = require('sequelize');
const db = require('../config/database');

class User extends Model {}
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        registration_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        role: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },   
    {
        sequelize: db,
        modelName: 'users',
        timestamps: true,
    }
)

module.exports = User;