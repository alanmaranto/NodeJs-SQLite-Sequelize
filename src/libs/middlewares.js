const express = require('express')
const port = process.env.PORT || 4005;

module.exports = app => {
    //settings
    app.set(port);

    //middlewares
    app.use(express.json());
    app.use((req, res, next) => {
        //delete req.body.id;
        next();
    })
}