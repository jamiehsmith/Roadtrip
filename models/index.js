const Sequelize = require('sequelize');
// For local setup, uncomment below
// const dbConfig = require('../config/db.config.js');
// And below replace "process.env" with "dbConfig"
const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize);
module.exports = db;
