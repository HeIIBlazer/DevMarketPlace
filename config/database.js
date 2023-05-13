const {Sequelize} = require('sequelize');
const connect = new Sequelize('marketplace', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connect;