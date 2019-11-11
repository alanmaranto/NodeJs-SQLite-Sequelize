module.exports = app => {
  const Tasks = app.db.models.Tasks;

  app
    .route("/tasks")
    .get((res, req) => {
      Tasks.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ mensaje: error.message });
        });
    })
    .post((req, res) => {
      console.log(req.body);
      Tasks.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ mensaje: error.message });
        });
    });
};
