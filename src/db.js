const Sequelize = require("sequelize");

const db = null;

module.exports = app => {
  const config = app.libs.config;
  console.log(config);

  if (!db) {
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
  }
  return db;
};
