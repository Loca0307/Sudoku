//require framework and middleware dependencies
const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');

const fs = require('fs-extra');

const server_socket = require('./server_scripts/server_socket')
const {socket_init} = require('./websocket');



//init framework
const app = express();

// ho metti tutti i fails che vuoi che i costumers hanno in public ho crei custum root che ritorna quel file

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, 'public'), {index: "index.html"}));

app.use(express.json({limit: '4MB'}));    // parse application/json
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

//sessions
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "mycutelittlesecretkey<3<3xp",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));
app.use(cookieParser());


//controllers
const routers = require('./routes');

app.use(routers.home);
app.use('', routers.sudoku);
app.use('', routers.high_scores);
app.use('/waitroom', routers.waitroom);


//default fallback handlers
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  //if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.json({
        message: err.message,
        error: err
      });
    });
  //}

  // production error handler
  // no stacktraces leaked to user
  // app.use(function(err, req, res, next) {
  //   res.status(err.status || 500);
  //   res.json({
  //     message: err.message,
  //     error: {}
  //   });
  // });



//start server
app.set('port', process.env.PORT || 8888);

var server = require('http').createServer(app);

const io = socket_init(server);

server.on('listening', function() {
  console.log('Express server listening on port ' + server.address().port);
});

server.listen(app.get('port'));

module.exports = {
  io : io
}