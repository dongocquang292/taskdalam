const dbConfig = require("../config/db.config.js");
// Kết nối đến database
const Sequelize = require("sequelize"); 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize; 
db.sequelize = sequelize;

db.employee = require("./employees.model")(sequelize, Sequelize);
module.exports = db;