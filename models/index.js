const dbConfig = require("../config/adminDB.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.DIALECT,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.service = require("./service")(sequelize, Sequelize);

module.exports = db;