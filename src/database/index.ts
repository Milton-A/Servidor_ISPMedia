import { Sequelize } from "sequelize";
const config = require("../config/database");

const env = process.env.NODE_ENV || "development";
const sequelizeConfig = config[env];

const connection = new Sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  {
    host: sequelizeConfig.host,
    dialect: sequelizeConfig.dialect,
  }
);

export default connection;
