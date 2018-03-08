//A Node.js static resource http server which provides URL rewrite for the callback
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(function(req, res, next) {
    if (req.url == '/callback') {
      res.sendfile(__dirname + '/dist/index.html');
    } else {
      next();
    }
});
var port = process.env.PORT || 80;
app.listen(port);
console.log('server started : '+ port);
