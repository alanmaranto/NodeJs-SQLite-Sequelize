const port = process.env.PORT || 4005;

module.exports = app => {

 app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}