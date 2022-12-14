//EJS Compiled Views - This file was automatically generated on Wed Dec 14 2022 16:33:58 GMT+0100 (Central European Standard Time)
ejs.views_include = function(locals) {
    console.log("views_include_setup",locals);
    return function(path, d) {
        console.log("ejs.views_include",path,d);
        return ejs["views_"+path.replace(/\//g,"_")]({...d,...locals}, null, ejs.views_include(locals));
    }
};
ejs.views_high_scores = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<html>\n  <%- include(\"includes/head\") %>\n  <head>\n      <link rel=\"stylesheet\"  href=\"/styles/css/high_scores.css\">\n      <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n      <link rel=\"icon\" href=\"icons/joystick.png\" type=\"image/icon type\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  </head>\n\n    <body>\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\" id=\"section\">\n\n        <h1>Welcome to highscore page</h1>\n        <form method=\"GET\" action=\"/sudoku/high_scores\">\n          <ul>\n            <li>\n              <span>1</span>\n              <span>a</span>\n              <span>0</span>\n              <span><img src=\"/styles/img/award.png\"></span>\n            </li>\n          </ul>\n        </form>\n\n      </section>\n\n      <%- include(\"includes/footer\") %>\n    </body>\n</html>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n  ")
    ; __line = 2
    ; __append( include("includes/head") )
    ; __append("\n  <head>\n      <link rel=\"stylesheet\"  href=\"/styles/css/high_scores.css\">\n      <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n      <link rel=\"icon\" href=\"icons/joystick.png\" type=\"image/icon type\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  </head>\n\n    <body>\n      ")
    ; __line = 11
    ; __append( include("includes/header") )
    ; __append("\n\n      <section class=\"main-section\" id=\"section\">\n\n        <h1>Welcome to highscore page</h1>\n        <form method=\"GET\" action=\"/sudoku/high_scores\">\n          <ul>\n            <li>\n              <span>1</span>\n              <span>a</span>\n              <span>0</span>\n              <span><img src=\"/styles/img/award.png\"></span>\n            </li>\n          </ul>\n        </form>\n\n      </section>\n\n      ")
    ; __line = 29
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n</html>\n")
    ; __line = 32
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_footer = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<footer class=\"main-footer\">\n    <p>Copyright © 2022 Sudoku. All Rights Reserved</p>\n</footer>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<footer class=\"main-footer\">\n    <p>Copyright © 2022 Sudoku. All Rights Reserved</p>\n</footer>")
    ; __line = 3
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_head = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<head>\n    <title>Sudoku</title>\n    <link rel=\"stylesheet\"  href=\"/styles/css/style.css\">\n    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n    <link rel=\"icon\" href=\"/styles/img/sudoku-logo.png\" type=\"image/icon type\">\n    <meta name=\"author\" content=\"Valentino Belotcaci\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n</head>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<head>\n    <title>Sudoku</title>\n    <link rel=\"stylesheet\"  href=\"/styles/css/style.css\">\n    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n    <link rel=\"icon\" href=\"/styles/img/sudoku-logo.png\" type=\"image/icon type\">\n    <meta name=\"author\" content=\"Valentino Belotcaci\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n</head>")
    ; __line = 8
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_header = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<header class=\"main-header\">\n    <a href=\"/index.html\"><img src=\"/styles/img/sudoku-logo.png\"></a>\n</header>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<header class=\"main-header\">\n    <a href=\"/index.html\"><img src=\"/styles/img/sudoku-logo.png\"></a>\n</header>")
    ; __line = 3
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_includes_login = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<main class = \"main-home\">\n    <div class=\"box\">\n      <form class=\"form\" method=\"POST\" action=\"/sudoku\">\n        <h3><%- msg %></h3>\n        <div class=\"inputBox\">\n          <label>Username</label>\n          <input type=\"text\" required = \"required\" id=\"username\" name=\"username\">\n          <br>\n          <label>Password</label>\n          <input type=\"password\" required = \"required\" id=\"password\" name=\"password\">\n          <br>\n          <!-- <label>Difficulty</label>\n          <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\"> -->\n          <br>\n          <button type=\"submit\"><img src=\"/styles/img/enter.png\">Login</button>\n          <!-- <button type=\"submit\" formaction=\"/sudoku/solo_game\">Play Solo</button> -->\n        </div>\n      </form>\n\n    </div>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main class = \"main-home\">\n    <div class=\"box\">\n      <form class=\"form\" method=\"POST\" action=\"/sudoku\">\n        <h3>")
    ; __line = 4
    ; __append( msg )
    ; __append("</h3>\n        <div class=\"inputBox\">\n          <label>Username</label>\n          <input type=\"text\" required = \"required\" id=\"username\" name=\"username\">\n          <br>\n          <label>Password</label>\n          <input type=\"password\" required = \"required\" id=\"password\" name=\"password\">\n          <br>\n          <!-- <label>Difficulty</label>\n          <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\"> -->\n          <br>\n          <button type=\"submit\"><img src=\"/styles/img/enter.png\">Login</button>\n          <!-- <button type=\"submit\" formaction=\"/sudoku/solo_game\">Play Solo</button> -->\n        </div>\n      </form>\n\n    </div>\n</main>")
    ; __line = 21
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_index = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!--\n    Web Atelier 2022\n\n    Home Page\n\n    Author: __Belotcaci Valentino__\n\n    Exported to ejs: Hoormazd Pirayeshfar\n\n-->\n<html>\n    <%- include(\"includes/head\") %>\n    <head>\n      <link rel=\"stylesheet\"  href=\"/styles/css/home.css\">\n    </head>\n    <body>\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n        <%- include(\"includes/login\") %>\n      </section>\n      <%- include(\"includes/footer\") %>\n    </body>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!--\n    Web Atelier 2022\n\n    Home Page\n\n    Author: __Belotcaci Valentino__\n\n    Exported to ejs: Hoormazd Pirayeshfar\n\n-->\n<html>\n    ")
    ; __line = 12
    ; __append( include("includes/head") )
    ; __append("\n    <head>\n      <link rel=\"stylesheet\"  href=\"/styles/css/home.css\">\n    </head>\n    <body>\n      ")
    ; __line = 17
    ; __append( include("includes/header") )
    ; __append("\n\n      <section class=\"main-section\">\n        ")
    ; __line = 20
    ; __append( include("includes/login") )
    ; __append("\n      </section>\n      ")
    ; __line = 22
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n</html>")
    ; __line = 24
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_middle = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel=\"stylesheet\"  href=\"/styles/css/middle.css\">\n        <link rel=\"stylesheet\"  href=\"/styles/css/style.css\">\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n        <link rel=\"icon\" href=\"icons/joystick.png\" type=\"image/icon type\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    </head>\n\n    <body>\n      <%- include(\"includes/header\") %>\n      <%- message %>\n      <button class=\"logout\" type=\"submit\"><img src=\"/styles/img/exit.png\" >Log-out</button>\n      <section class=\"main-section\">\n\n        <div class=\"boxes\">\n          <img src = \"/styles/img/player.png\">\n          <h1>Play solo</h1>\n          <p>Here you can practice to improve your sudoku solving skill.</p>\n          <br>\n          <p>Simply start a game of your chosen difficulty, and play away!</p>\n          <br>\n          <p>Single-player games are not timed, so don't stress. But remember that your moves are recorded, and wrong inputs are penalized. After each game, make sure to review your mistakes by checking your personal single-player games history.</p>\n      \n          <br><hr><br>\n          <form method=\"POST\" action=\"/sudoku/solo_game\">\n            <input type=\"hidden\" value=\"<%- userprofiledata.username %>\" id=\"username\" name=\"username\">\n            <input type=\"hidden\" value=\"<%- userprofiledata.password %>\" id=\"password\" name=\"password\">\n            <label>Difficulty:</label>\n            <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\">\n            <br>\n            <button type=\"submit\"><img src=\"/styles/img/play.png\" >Play Solo</button>\n          </form>\n\n        </div>\n\n        <div class=\"boxes\">\n          <img src = \"/styles/img/high-score.png\">\n          <h1>High Scores</h1>\n          <p>Here you can see a complete history of your single-player and multi-player games, as well as the global highscores to compare your scores with the world!</p>\n          <br>\n          <p>If you can't find your scores on the global highscores list, dont worry! remember that practice makes perfect!</p>\n          <br><hr><br>\n          <button type=\"submit\"><img src=\"/styles/img/list.png\" >Your single-player games</button>\n          <button type=\"submit\"><img src=\"/styles/img/list.png\" >Your multi-player games</button>\n          <br><br><hr><br>\n          <button type=\"submit\"><img src=\"/styles/img/worldwide.png\" >Global single-player highscores</button>\n          <button type=\"submit\"><img src=\"/styles/img/worldwide.png\" >Global multi-player highscores</button>\n        </div>\n\n        <div class=\"boxes\">\n          <img src = \"/styles/img/team.png\">\n          <h1>Play with friends</h1>\n          <p>Join a game, or create a game to play with your friends!</p>\n          <br><hr><br>\n          <form class=\"\" action=\"waitroom\" method=\"post\">\n            <label>Difficulty:</label>\n            <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff-multi\" name=\"diff\">\n            <label>Lobby Size:</label>\n            <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"lobby-multi\" name=\"diff\">\n            <button type=\"submit\"><img src=\"/styles/img/people.png\" >Create lobby</button>\n            <br><br><hr><br>\n            <label>Lobby Key</label>\n            <input type=\"text\" id=\"key\" name=\"key\">\n            <button type=\"submit\"><img src=\"/styles/img/people.png\" >Join lobby</button>\n          </form>\n        </div>\n      </section>\n\n      <%- include(\"includes/footer\") %>\n    </body>\n</html>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n    ")
    ; __line = 2
    ; __append( include("includes/head") )
    ; __append("\n    <head>\n        <link rel=\"stylesheet\"  href=\"/styles/css/middle.css\">\n        <link rel=\"stylesheet\"  href=\"/styles/css/style.css\">\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n        <link rel=\"icon\" href=\"icons/joystick.png\" type=\"image/icon type\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    </head>\n\n    <body>\n      ")
    ; __line = 12
    ; __append( include("includes/header") )
    ; __append("\n      ")
    ; __line = 13
    ; __append( message )
    ; __append("\n      <button class=\"logout\" type=\"submit\"><img src=\"/styles/img/exit.png\" >Log-out</button>\n      <section class=\"main-section\">\n\n        <div class=\"boxes\">\n          <img src = \"/styles/img/player.png\">\n          <h1>Play solo</h1>\n          <p>Here you can practice to improve your sudoku solving skill.</p>\n          <br>\n          <p>Simply start a game of your chosen difficulty, and play away!</p>\n          <br>\n          <p>Single-player games are not timed, so don't stress. But remember that your moves are recorded, and wrong inputs are penalized. After each game, make sure to review your mistakes by checking your personal single-player games history.</p>\n      \n          <br><hr><br>\n          <form method=\"POST\" action=\"/sudoku/solo_game\">\n            <input type=\"hidden\" value=\"")
    ; __line = 28
    ; __append( userprofiledata.username )
    ; __append("\" id=\"username\" name=\"username\">\n            <input type=\"hidden\" value=\"")
    ; __line = 29
    ; __append( userprofiledata.password )
    ; __append("\" id=\"password\" name=\"password\">\n            <label>Difficulty:</label>\n            <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\">\n            <br>\n            <button type=\"submit\"><img src=\"/styles/img/play.png\" >Play Solo</button>\n          </form>\n\n        </div>\n\n        <div class=\"boxes\">\n          <img src = \"/styles/img/high-score.png\">\n          <h1>High Scores</h1>\n          <p>Here you can see a complete history of your single-player and multi-player games, as well as the global highscores to compare your scores with the world!</p>\n          <br>\n          <p>If you can't find your scores on the global highscores list, dont worry! remember that practice makes perfect!</p>\n          <br><hr><br>\n          <button type=\"submit\"><img src=\"/styles/img/list.png\" >Your single-player games</button>\n          <button type=\"submit\"><img src=\"/styles/img/list.png\" >Your multi-player games</button>\n          <br><br><hr><br>\n          <button type=\"submit\"><img src=\"/styles/img/worldwide.png\" >Global single-player highscores</button>\n          <button type=\"submit\"><img src=\"/styles/img/worldwide.png\" >Global multi-player highscores</button>\n        </div>\n\n        <div class=\"boxes\">\n          <img src = \"/styles/img/team.png\">\n          <h1>Play with friends</h1>\n          <p>Join a game, or create a game to play with your friends!</p>\n          <br><hr><br>\n          <form class=\"\" action=\"waitroom\" method=\"post\">\n            <label>Difficulty:</label>\n            <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff-multi\" name=\"diff\">\n            <label>Lobby Size:</label>\n            <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"lobby-multi\" name=\"diff\">\n            <button type=\"submit\"><img src=\"/styles/img/people.png\" >Create lobby</button>\n            <br><br><hr><br>\n            <label>Lobby Key</label>\n            <input type=\"text\" id=\"key\" name=\"key\">\n            <button type=\"submit\"><img src=\"/styles/img/people.png\" >Join lobby</button>\n          </form>\n        </div>\n      </section>\n\n      ")
    ; __line = 71
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n</html>\n")
    ; __line = 74
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_solodoku = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n    </head>\n    <body>\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n\n       \n        <main>\n          <h1>Sudoku</h1>\n          <hr>\n          <h3><span id=\"msg\"><%- message %></span> <%- pagedata.username %>!</h3>\n          <p>Currently playing a game of difficulty: <span id=\"level\"><%- pagedata.diff %></span></p>\n          <h2 id = \"errors\">Score: <span id=\"score\"><%- pagedata.score %></span></h2>\n\n          <div id=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-2\"></div>\n          </div>\n          <form class=\"form\" method=\"POST\">\n              <input type=\"hidden\" value=\"<%- pagedata.username %>\" id=\"username\" name=\"username\">\n              <input type=\"hidden\" value=\"<%- pagedata.password %>\" id=\"password\" name=\"password\">\n              <button class=\"logout\" type=\"submit\"><img src=\"/styles/img/exit.png\" >Back to menu</button>\n              <button type=\"button\" onclick=\"showHint();\"><img src=\"/styles/img/lamp.png\">Show Hint!</button>\n              \n              <label>Difficulty</label>\n              <input type=\"range\" min=\"1\" max=\"3\" value=\"<%- pagedata.diff %>\" id=\"diff\" name=\"diff\">\n              <button type=\"submit\" formaction=\"/sudoku/solo_game\"><img src=\"/styles/img/refresh.png\">New Game</button>\n            \n            </div>\n          </form>\n            \n        </main>\n       \n      </section>\n      <%- include(\"includes/footer\") %>\n    </body>\n\n    <script src = \"/game/sudoku-solver.js\"></script>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n    ")
    ; __line = 2
    ; __append( include("includes/head") )
    ; __append("\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n    </head>\n    <body>\n      ")
    ; __line = 7
    ; __append( include("includes/header") )
    ; __append("\n\n      <section class=\"main-section\">\n\n       \n        <main>\n          <h1>Sudoku</h1>\n          <hr>\n          <h3><span id=\"msg\">")
    ; __line = 15
    ; __append( message )
    ; __append("</span> ")
    ; __append( pagedata.username )
    ; __append("!</h3>\n          <p>Currently playing a game of difficulty: <span id=\"level\">")
    ; __line = 16
    ; __append( pagedata.diff )
    ; __append("</span></p>\n          <h2 id = \"errors\">Score: <span id=\"score\">")
    ; __line = 17
    ; __append( pagedata.score )
    ; __append("</span></h2>\n\n          <div id=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-2\"></div>\n          </div>\n          <form class=\"form\" method=\"POST\">\n              <input type=\"hidden\" value=\"")
    ; __line = 31
    ; __append( pagedata.username )
    ; __append("\" id=\"username\" name=\"username\">\n              <input type=\"hidden\" value=\"")
    ; __line = 32
    ; __append( pagedata.password )
    ; __append("\" id=\"password\" name=\"password\">\n              <button class=\"logout\" type=\"submit\"><img src=\"/styles/img/exit.png\" >Back to menu</button>\n              <button type=\"button\" onclick=\"showHint();\"><img src=\"/styles/img/lamp.png\">Show Hint!</button>\n              \n              <label>Difficulty</label>\n              <input type=\"range\" min=\"1\" max=\"3\" value=\"")
    ; __line = 37
    ; __append( pagedata.diff )
    ; __append("\" id=\"diff\" name=\"diff\">\n              <button type=\"submit\" formaction=\"/sudoku/solo_game\"><img src=\"/styles/img/refresh.png\">New Game</button>\n            \n            </div>\n          </form>\n            \n        </main>\n       \n      </section>\n      ")
    ; __line = 46
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n\n    <script src = \"/game/sudoku-solver.js\"></script>\n</html>")
    ; __line = 50
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_sudoku = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n        <script src = \"/sudoku.js\"></script>\n    </head>\n    <body>\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n        <main>\n            <h1>Sudoku</h1>\n            <hr>\n            <h3><%- message %> <%- pagedata.username %></h3>\n            <p>Currently playing a game of <%- pagedata.diff %> difficulty</p>\n            <h2 id = \"errors\">Score: <%- pagedata.score %></h2>\n\n            <!-- 9X9 board -->\n            <div id=\"grid\">\n            </div>\n            \n            <!-- \n            <div id = \"board\"></div>\n            \n            <div id=\"digits\"></div>\n            <br> -->\n        </main>\n      </section>\n      <%- include(\"includes/footer\") %>\n    </body>\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"/client_scripts/client_socket.js\"></script>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n    ")
    ; __line = 2
    ; __append( include("includes/head") )
    ; __append("\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n        <script src = \"/sudoku.js\"></script>\n    </head>\n    <body>\n      ")
    ; __line = 8
    ; __append( include("includes/header") )
    ; __append("\n\n      <section class=\"main-section\">\n        <main>\n            <h1>Sudoku</h1>\n            <hr>\n            <h3>")
    ; __line = 14
    ; __append( message )
    ; __append(" ")
    ; __append( pagedata.username )
    ; __append("</h3>\n            <p>Currently playing a game of ")
    ; __line = 15
    ; __append( pagedata.diff )
    ; __append(" difficulty</p>\n            <h2 id = \"errors\">Score: ")
    ; __line = 16
    ; __append( pagedata.score )
    ; __append("</h2>\n\n            <!-- 9X9 board -->\n            <div id=\"grid\">\n            </div>\n            \n            <!-- \n            <div id = \"board\"></div>\n            \n            <div id=\"digits\"></div>\n            <br> -->\n        </main>\n      </section>\n      ")
    ; __line = 29
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"/client_scripts/client_socket.js\"></script>\n</html>")
    ; __line = 33
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_waitroom = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n    </head>\n    <body>\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n\n       \n        <main>\n            <h1>Sudoku</h1>\n            <hr>\n            \n                <ul>\n                    <li><h4>Connection Successful</h4></li>\n                    <li>\n                        <h4> Ready: <%=ready%></h4>\n                        <h4>Difficulty: </h4>\n                        <h4>Room Size:</h4> \n                    </li>\n                </ul>\n\n                \n        </main>\n       \n       \n      </section>\n      <%- include(\"includes/footer\") %>\n    </body>\n\n    <script src = \"/game/sudoku-solver.js\"></script>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n    ")
    ; __line = 2
    ; __append( include("includes/head") )
    ; __append("\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n    </head>\n    <body>\n      ")
    ; __line = 7
    ; __append( include("includes/header") )
    ; __append("\n\n      <section class=\"main-section\">\n\n       \n        <main>\n            <h1>Sudoku</h1>\n            <hr>\n            \n                <ul>\n                    <li><h4>Connection Successful</h4></li>\n                    <li>\n                        <h4> Ready: ")
    ; __line = 19
    ; __append(escapeFn(ready))
    ; __append("</h4>\n                        <h4>Difficulty: </h4>\n                        <h4>Room Size:</h4> \n                    </li>\n                </ul>\n\n                \n        </main>\n       \n       \n      </section>\n      ")
    ; __line = 30
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n\n    <script src = \"/game/sudoku-solver.js\"></script>\n</html>")
    ; __line = 34
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}