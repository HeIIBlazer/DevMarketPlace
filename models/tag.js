const { DataTypes, Model } = require('sequelize');
const db = require('../config/database');

class Tag extends Model { }
Tag.init({
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
    modelName: 'tags',
    timestamps: true,
})

module.exports = Tag;
