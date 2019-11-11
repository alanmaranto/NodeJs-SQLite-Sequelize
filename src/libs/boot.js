const port = process.env.PORT || 4005;

module.exports = app => {

  app.db.sequelize.sync().done(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  });

};