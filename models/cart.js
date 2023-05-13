const { DataTypes, Model } = require("sequelize");
const db = require("../config/database");

const Users = require("./user");
const Product = require("../models/product");

class Cart extends Model {}
Cart.init(
   {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      userId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: Users,
            key: "id",
         },
      },
      productId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: Product,
            key: "id",
         },
      },
      created_at: {
         type: DataTypes.DATE,
         allowNull: false,
      },
   },
   {
      sequelize: db,
      modelName: "cart",
      timestamps: false,
      indexes: [
         {
            unique: false,
            fields: ["userId", "productId"],
         },
      ],
   }
);

module.exports = Cart;
