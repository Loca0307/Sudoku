
const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const multer  = require('multer');

const app = express();


app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded
app.use(express.json({limit: '4MB'}));    // parse application/json
app.use(multer().none());   //parse multipart/form-data


app.use(express.static(path.join(__dirname, 'public'), {index: "sudoku.html"}));

app.use(methodOverride('_method'));


app.set('port', process.env.PORT || 8888);

var server = require('http').createServer(app);

server.on('listening', function() {
  console.log('Express server listening on port ' + server.address().port);
});

server.listen(app.get('port'));

