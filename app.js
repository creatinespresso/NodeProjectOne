const http = require('http');

const express = require('express');

const  app = express();

app.use( (request, response, next) => {

    console.log("In the middleware I was doing something");
    next();
});

app.use( (request, response, next) => {

    console.log("Nächste Middleware");
});


const server = http.createServer(app);
  
server.listen(3000);