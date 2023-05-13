const express = require('express');
const cors = require('cors');
const db = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});

let User = require('./models/user.js');
let Product = require('./models/product');
let Cart = require('./models/cart');
let Category = require('./models/category');
let Tag = require('./models/tag');
let Comment = require('./models/comment');
let History = require('./models/history');
let Product_Tag = require('./models/product_tag');
let Product_Category = require('./models/product_category');

User.hasOne(Product, { foreignKey: 'sellerId', sourceKey: 'id' });

User.associate = function (models) {
   // User.hasMany(models.Product, { foreignKey: 'sellerId', sourceKey: 'id' });
   User.hasMany(models.Cart, { foreignKey: 'userId', sourceKey: 'id' });
   User.hasMany(models.History, { foreignKey: 'userId', sourceKey: 'id' });
   User.hasMany(models.Comment, { foreignKey: 'userId', sourceKey: 'id' });
};

Product.associate = function (models) {
   // Product.belongsTo(models.User, { foreignKey: 'sellerId', targetKey: 'id' });
   Product.hasMany(models.Cart, { foreignKey: 'productId', sourceKey: 'id' });
   Product.hasMany(models.History, {
      foreignKey: 'productId',
      sourceKey: 'id',
   });
   Product.hasMany(models.Comment, {
      foreignKey: 'productId',
      sourceKey: 'id',
   });
   Product.belongsToMany(models.Category, { through: models.Product_Category });
   Product.belongsToMany(models.Tag, { through: models.Product_Tag });
};

db.sync({ alter: true });

require('./routes/user.route')(app);
require('./routes/product.route')(app);
require('./routes/category.route')(app);
require('./routes/tag.route')(app);
require('./routes/comment.route')(app);
require('./routes/cart.route')(app);
require('./routes/history.route')(app);
require('./routes/product_category.route')(app);
require('./routes/product_tag.route')(app);
