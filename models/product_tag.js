const { DataTypes, Model } = require('sequelize');
const db = require('../config/database');
const Product = require('./product');
const Tag = require('./tag');

class ProductTag extends Model { }
ProductTag.init(
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
      tagId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: Tag,
            key: "id",
         },
      },
   },
   {
      sequelize: db,
      modelName: "product_tag",
      timestamps: false,
      indexes: [
         {
            unique: false,
            fields: ["productId", "tagId"],
         },
      ],
   }
);

module.exports = ProductTag;