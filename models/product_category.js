const { DataTypes, Model } = require('sequelize');
const db = require('../config/database');
const Product = require('../models/product');
const Category = require('../models/category');

class ProductCategory extends Model { }
ProductCategory.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      productId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: Product,
            key: "id",
         },
      },
      categoryId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: Category,
            key: "id",
         },
      },
   },
   {
      sequelize: db,
      modelName: "product_category",
      timestamps: false,
      indexes: [
         {
            unique: false,
            fields: ["productId", "categoryId"],
         },
      ],
   }
);

module.exports = ProductCategory;