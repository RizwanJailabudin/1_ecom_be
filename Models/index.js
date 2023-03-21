const sequelize = require("sequelize");
const dbconfig =  require("../Config/db.config");

const seq = new sequelize(
     dbconfig.DB,
     dbconfig.Username,
     dbconfig.Password,{
     Host : dbconfig.Host,
     dialect : dbconfig.Dialect
     }
);

const db = {};
db.sequelizeCon = seq;
db.sequelizeConfiq = sequelize;
db.categories = require("./Categories.model")(db.sequelizeCon,db.sequelizeConfiq);


module.exports = db;