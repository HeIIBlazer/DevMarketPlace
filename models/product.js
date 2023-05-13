const { DataTypes, Model } = require('sequelize');
const db = require('../config/database');

class Product extends Model { }
Product.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      title: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      sellerId: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      description: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      price: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
   },
   {
      sequelize: db,
      modelName: "product",
      timestamps: true,
   }
);

module.exports = Product;