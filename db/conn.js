const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "heroku_4d0981520cb6e09",
  "b735ef52d349de",
  "9a6b8d6e",
  {
    host: "us-cdbr-east-06.cleardb.net",
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("conectamos ao sequelize");
} catch (error) {
  console.log(`não foi possível conectar:${error}`);
}

module.exports = sequelize;
