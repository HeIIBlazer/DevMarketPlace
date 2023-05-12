const { DataTypes, Model } = require('sequelize');
const db = require('../config/database');
const Users = require('./user');
const Product = require('../models/product');

class Comment extends Model { }
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        }
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sequelize: db,
    modelName: 'comment',
    timestamps: true,
    indexes: [{
        unique: false,
        fields: ['userId', 'productId']
    }]
})

module.exports = Comment;