module.exports = {
  database: "Tasks",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "tasks-db.sqlite",
    define: {
      underscore: true
    },
    operatorsAliases: false,
  }
};
