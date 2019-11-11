const Sequelize = require("sequelize");
const fs = require('fs')
const path = require('path');

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

    const db = {
        sequelize,
        Sequelize,
        models: {}
    };

    const dir = path.join(__dirname, 'models');
    fs.readdirSync(dir).forEach(filename => {
        const modelDir = path.join(dir, filename);
        const model = sequelize.import(modelDir);
        db.models[model.name] = model;
    });
    
    //Recorre cada una de las claves del objeto y su metodo associate
    Object.keys(db.models).forEach(key => {
        db.models[key].associate(db.models);
    });
  }
  return db;
};
