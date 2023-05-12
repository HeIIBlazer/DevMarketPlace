const { DataTypes, Model } = require('sequelize');
const db = require('../config/database');

class Category extends Model { }
Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sequelize: db,
    modelName: 'categories',
    timestamps: true,
})

module.exports = Category;