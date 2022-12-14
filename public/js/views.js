//EJS Compiled Views - This file was automatically generated on Thu Dec 15 2022 00:14:21 GMT+0100 (Central European Standard Time)
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
  , __lines = "<html>\n  <%- include(\"includes/head\") %>\n  <head>\n      <link rel=\"stylesheet\"  href=\"/styles/css/high_scores.css\">\n      <link rel=\"stylesheet\"  href=\"/styles/css/sudoku.css\">\n      <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n      <link rel=\"icon\" href=\"icons/joystick.png\" type=\"image/icon type\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  </head>\n\n    <body>\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n\n        <h1>Welcome to highscore page</h1>\n        <% high_scores.forEach(high_score => {\n          if (high_score.game == \"solo\") {\n          %>\n          <form method=\"GET\" action=\"/sudoku/high_scores\">\n            <ul>\n              <li>\n                <span>Game ID: <%= high_score._id%></span>\n              </li>\n              <li>\n                <span>Game mode: <%= high_score.game%></span>\n              </li>\n              <li>\n                Total moves: <%= high_score.totalMoves%>\n              </li>\n              <li>\n                <span>Track moves: <input class=\"tracker-<%= high_score._id%>\" style=\"width: 100% !important;\" type=\"range\" min=\"0\" max=\"<%=high_score.totalMoves - 1%>\" value=\"<%= high_score.totalMoves - 1%>\"></span>\n              </li>\n              <li>\n                <div id=\"grid\" class=\"grid-<%= high_score._id%>\">\n                  <div class=\"smallgrid\" id=\"grid-0-0\">\n                    <input id=\"<%= high_score._id%>-input-0\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-1\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-2\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-9\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-10\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-11\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-18\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-19\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-20\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-0\">\n                    <input id=\"<%= high_score._id%>-input-3\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-4\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-5\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-12\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-13\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-14\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-21\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-22\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-23\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-0\">\n                    <input id=\"<%= high_score._id%>-input-6\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-7\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-8\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-15\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-16\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-17\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-24\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-25\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-26\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-0-1\">\n                    <input id=\"<%= high_score._id%>-input-27\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= high_score._id%>-input-28\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-29\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-36\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-37\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-38\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-45\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-46\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-47\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-1\">\n                    <input id=\"<%= high_score._id%>-input-30\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= high_score._id%>-input-31\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-32\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-39\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-40\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-41\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-48\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-49\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-50\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-1\">\n                    <input id=\"<%= high_score._id%>-input-33\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= high_score._id%>-input-34\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-35\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-42\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-43\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-44\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-51\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-52\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-53\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    </div>\n                  <div class=\"smallgrid\" id=\"grid-0-2\">\n                    <input id=\"<%= high_score._id%>-input-54\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= high_score._id%>-input-55\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-56\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-63\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-64\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-65\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-72\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-73\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-74\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-2\">\n                    <input id=\"<%= high_score._id%>-input-57\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-58\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-59\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-66\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-67\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-68\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-75\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-76\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-77\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-2\">\n                    <input id=\"<%= high_score._id%>-input-60\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-61\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-62\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-69\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-70\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-71\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-78\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-79\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-80\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                </div>\n              </li>\n              <li>\n                <span></span>\n                <span>a</span>\n                <span>0</span>\n                <span><img src=\"/styles/img/award.png\"></span>\n              </li>\n            </ul>\n          </form>\n<<<<<<< Updated upstream\n          <script>\n            function prephs() {\n=======\n          <!-- <script>\n            function prephs<%= high_score._id %>() {\n>>>>>>> Stashed changes\n              var currentval = document.querySelector(\".tracker-<%= high_score._id%>\").value;\n              var hs = JSON.stringify(high_score);\n              for (let i = 0; i < 81; i++) {\n                //get cell\n                var cell = document.getElementById(\"<%= high_score._id%>-input-\"+i);\n\n                //set numbers\n                cell.value = hs.boardObjHistory[currentval].fullboard[i];\n\n                //remove extra classes\n                cell.classList.remove(\"wrong-cell\");\n                cell.classList.remove(\"correct-cell\");\n                cell.classList.remove(\"hint-cell\");\n                cell.classList.remove(\"givennumber\");\n\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].correctIndexes.length ; i++) {\n                document.getElementById(\"<%= high_score._id%>-input-\"+hs.boardObjHistory[currentval].correctIndexes[i]).classList.add(\"correct-cell\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].wrongIndexes.length ; i++) {\n                document.getElementById(\"<%= high_score._id%>-input-\"+hs.boardObjHistory[currentval].wrongIndexes[i]).classList.add(\"wrong-cell\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].givenNumberIndexes.length ; i++) {\n                document.getElementById(\"<%= high_score._id%>-input-\"+hs.boardObjHistory[currentval].givenNumberIndexes[i]).classList.add(\"givennumber\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].hintIndexes.length ; i++) {\n                document.getElementById(\"<%= high_score._id%>-input-\"+hs.boardObjHistory[currentval].hintIndexes[i]).classList.add(\"hint-cell\");\n              }\n            }\n            document.querySelector(\".tracker-<%= high_score._id%>\").addEventListener('input', () => {\n              prephs();\n            });;\n            prephs();\n          </script>\n          <%\n          }\n        }); %> -->\n\n      </section>\n\n      <%- include(\"includes/footer\") %>\n    </body>\n</html>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n  ")
    ; __line = 2
    ; __append( include("includes/head") )
    ; __append("\n  <head>\n      <link rel=\"stylesheet\"  href=\"/styles/css/high_scores.css\">\n      <link rel=\"stylesheet\"  href=\"/styles/css/sudoku.css\">\n      <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n      <link rel=\"icon\" href=\"icons/joystick.png\" type=\"image/icon type\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  </head>\n\n    <body>\n      ")
    ; __line = 12
    ; __append( include("includes/header") )
    ; __append("\n\n      <section class=\"main-section\">\n\n        <h1>Welcome to highscore page</h1>\n        ")
    ; __line = 17
    ;  high_scores.forEach(high_score => {
          if (high_score.game == "solo") {
          
    ; __line = 19
    ; __append("\n          <form method=\"GET\" action=\"/sudoku/high_scores\">\n            <ul>\n              <li>\n                <span>Game ID: ")
    ; __line = 23
    ; __append(escapeFn( high_score._id))
    ; __append("</span>\n              </li>\n              <li>\n                <span>Game mode: ")
    ; __line = 26
    ; __append(escapeFn( high_score.game))
    ; __append("</span>\n              </li>\n              <li>\n                Total moves: ")
    ; __line = 29
    ; __append(escapeFn( high_score.totalMoves))
    ; __append("\n              </li>\n              <li>\n                <span>Track moves: <input class=\"tracker-")
    ; __line = 32
    ; __append(escapeFn( high_score._id))
    ; __append("\" style=\"width: 100% !important;\" type=\"range\" min=\"0\" max=\"")
    ; __append(escapeFn(high_score.totalMoves - 1))
    ; __append("\" value=\"")
    ; __append(escapeFn( high_score.totalMoves - 1))
    ; __append("\"></span>\n              </li>\n              <li>\n                <div id=\"grid\" class=\"grid-")
    ; __line = 35
    ; __append(escapeFn( high_score._id))
    ; __append("\">\n                  <div class=\"smallgrid\" id=\"grid-0-0\">\n                    <input id=\"")
    ; __line = 37
    ; __append(escapeFn( high_score._id))
    ; __append("-input-0\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 38
    ; __append(escapeFn( high_score._id))
    ; __append("-input-1\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 39
    ; __append(escapeFn( high_score._id))
    ; __append("-input-2\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 40
    ; __append(escapeFn( high_score._id))
    ; __append("-input-9\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 41
    ; __append(escapeFn( high_score._id))
    ; __append("-input-10\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 42
    ; __append(escapeFn( high_score._id))
    ; __append("-input-11\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 43
    ; __append(escapeFn( high_score._id))
    ; __append("-input-18\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 44
    ; __append(escapeFn( high_score._id))
    ; __append("-input-19\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 45
    ; __append(escapeFn( high_score._id))
    ; __append("-input-20\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-0\">\n                    <input id=\"")
    ; __line = 48
    ; __append(escapeFn( high_score._id))
    ; __append("-input-3\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 49
    ; __append(escapeFn( high_score._id))
    ; __append("-input-4\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 50
    ; __append(escapeFn( high_score._id))
    ; __append("-input-5\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 51
    ; __append(escapeFn( high_score._id))
    ; __append("-input-12\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 52
    ; __append(escapeFn( high_score._id))
    ; __append("-input-13\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 53
    ; __append(escapeFn( high_score._id))
    ; __append("-input-14\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 54
    ; __append(escapeFn( high_score._id))
    ; __append("-input-21\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 55
    ; __append(escapeFn( high_score._id))
    ; __append("-input-22\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 56
    ; __append(escapeFn( high_score._id))
    ; __append("-input-23\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-0\">\n                    <input id=\"")
    ; __line = 59
    ; __append(escapeFn( high_score._id))
    ; __append("-input-6\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 60
    ; __append(escapeFn( high_score._id))
    ; __append("-input-7\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 61
    ; __append(escapeFn( high_score._id))
    ; __append("-input-8\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 62
    ; __append(escapeFn( high_score._id))
    ; __append("-input-15\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 63
    ; __append(escapeFn( high_score._id))
    ; __append("-input-16\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 64
    ; __append(escapeFn( high_score._id))
    ; __append("-input-17\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 65
    ; __append(escapeFn( high_score._id))
    ; __append("-input-24\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 66
    ; __append(escapeFn( high_score._id))
    ; __append("-input-25\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 67
    ; __append(escapeFn( high_score._id))
    ; __append("-input-26\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-0-1\">\n                    <input id=\"")
    ; __line = 70
    ; __append(escapeFn( high_score._id))
    ; __append("-input-27\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 71
    ; __append(escapeFn( high_score._id))
    ; __append("-input-28\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 72
    ; __append(escapeFn( high_score._id))
    ; __append("-input-29\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 73
    ; __append(escapeFn( high_score._id))
    ; __append("-input-36\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 74
    ; __append(escapeFn( high_score._id))
    ; __append("-input-37\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 75
    ; __append(escapeFn( high_score._id))
    ; __append("-input-38\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 76
    ; __append(escapeFn( high_score._id))
    ; __append("-input-45\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 77
    ; __append(escapeFn( high_score._id))
    ; __append("-input-46\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 78
    ; __append(escapeFn( high_score._id))
    ; __append("-input-47\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-1\">\n                    <input id=\"")
    ; __line = 81
    ; __append(escapeFn( high_score._id))
    ; __append("-input-30\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 82
    ; __append(escapeFn( high_score._id))
    ; __append("-input-31\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 83
    ; __append(escapeFn( high_score._id))
    ; __append("-input-32\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 84
    ; __append(escapeFn( high_score._id))
    ; __append("-input-39\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 85
    ; __append(escapeFn( high_score._id))
    ; __append("-input-40\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 86
    ; __append(escapeFn( high_score._id))
    ; __append("-input-41\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 87
    ; __append(escapeFn( high_score._id))
    ; __append("-input-48\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 88
    ; __append(escapeFn( high_score._id))
    ; __append("-input-49\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 89
    ; __append(escapeFn( high_score._id))
    ; __append("-input-50\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-1\">\n                    <input id=\"")
    ; __line = 92
    ; __append(escapeFn( high_score._id))
    ; __append("-input-33\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 93
    ; __append(escapeFn( high_score._id))
    ; __append("-input-34\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 94
    ; __append(escapeFn( high_score._id))
    ; __append("-input-35\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 95
    ; __append(escapeFn( high_score._id))
    ; __append("-input-42\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 96
    ; __append(escapeFn( high_score._id))
    ; __append("-input-43\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 97
    ; __append(escapeFn( high_score._id))
    ; __append("-input-44\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 98
    ; __append(escapeFn( high_score._id))
    ; __append("-input-51\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 99
    ; __append(escapeFn( high_score._id))
    ; __append("-input-52\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 100
    ; __append(escapeFn( high_score._id))
    ; __append("-input-53\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    </div>\n                  <div class=\"smallgrid\" id=\"grid-0-2\">\n                    <input id=\"")
    ; __line = 103
    ; __append(escapeFn( high_score._id))
    ; __append("-input-54\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 104
    ; __append(escapeFn( high_score._id))
    ; __append("-input-55\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 105
    ; __append(escapeFn( high_score._id))
    ; __append("-input-56\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 106
    ; __append(escapeFn( high_score._id))
    ; __append("-input-63\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 107
    ; __append(escapeFn( high_score._id))
    ; __append("-input-64\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 108
    ; __append(escapeFn( high_score._id))
    ; __append("-input-65\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 109
    ; __append(escapeFn( high_score._id))
    ; __append("-input-72\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 110
    ; __append(escapeFn( high_score._id))
    ; __append("-input-73\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 111
    ; __append(escapeFn( high_score._id))
    ; __append("-input-74\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-2\">\n                    <input id=\"")
    ; __line = 114
    ; __append(escapeFn( high_score._id))
    ; __append("-input-57\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 115
    ; __append(escapeFn( high_score._id))
    ; __append("-input-58\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 116
    ; __append(escapeFn( high_score._id))
    ; __append("-input-59\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 117
    ; __append(escapeFn( high_score._id))
    ; __append("-input-66\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 118
    ; __append(escapeFn( high_score._id))
    ; __append("-input-67\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 119
    ; __append(escapeFn( high_score._id))
    ; __append("-input-68\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 120
    ; __append(escapeFn( high_score._id))
    ; __append("-input-75\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 121
    ; __append(escapeFn( high_score._id))
    ; __append("-input-76\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 122
    ; __append(escapeFn( high_score._id))
    ; __append("-input-77\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-2\">\n                    <input id=\"")
    ; __line = 125
    ; __append(escapeFn( high_score._id))
    ; __append("-input-60\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 126
    ; __append(escapeFn( high_score._id))
    ; __append("-input-61\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 127
    ; __append(escapeFn( high_score._id))
    ; __append("-input-62\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 128
    ; __append(escapeFn( high_score._id))
    ; __append("-input-69\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 129
    ; __append(escapeFn( high_score._id))
    ; __append("-input-70\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 130
    ; __append(escapeFn( high_score._id))
    ; __append("-input-71\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 131
    ; __append(escapeFn( high_score._id))
    ; __append("-input-78\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 132
    ; __append(escapeFn( high_score._id))
    ; __append("-input-79\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 133
    ; __append(escapeFn( high_score._id))
    ; __append("-input-80\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                </div>\n              </li>\n              <li>\n                <span></span>\n                <span>a</span>\n                <span>0</span>\n                <span><img src=\"/styles/img/award.png\"></span>\n              </li>\n            </ul>\n          </form>\n<<<<<<< Updated upstream\n          <script>\n            function prephs() {\n=======\n          <!-- <script>\n            function prephs")
    ; __line = 150
    ; __append(escapeFn( high_score._id ))
    ; __append("() {\n>>>>>>> Stashed changes\n              var currentval = document.querySelector(\".tracker-")
    ; __line = 152
    ; __append(escapeFn( high_score._id))
    ; __append("\").value;\n              var hs = JSON.stringify(high_score);\n              for (let i = 0; i < 81; i++) {\n                //get cell\n                var cell = document.getElementById(\"")
    ; __line = 156
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+i);\n\n                //set numbers\n                cell.value = hs.boardObjHistory[currentval].fullboard[i];\n\n                //remove extra classes\n                cell.classList.remove(\"wrong-cell\");\n                cell.classList.remove(\"correct-cell\");\n                cell.classList.remove(\"hint-cell\");\n                cell.classList.remove(\"givennumber\");\n\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].correctIndexes.length ; i++) {\n                document.getElementById(\"")
    ; __line = 169
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+hs.boardObjHistory[currentval].correctIndexes[i]).classList.add(\"correct-cell\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].wrongIndexes.length ; i++) {\n                document.getElementById(\"")
    ; __line = 172
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+hs.boardObjHistory[currentval].wrongIndexes[i]).classList.add(\"wrong-cell\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].givenNumberIndexes.length ; i++) {\n                document.getElementById(\"")
    ; __line = 175
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+hs.boardObjHistory[currentval].givenNumberIndexes[i]).classList.add(\"givennumber\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].hintIndexes.length ; i++) {\n                document.getElementById(\"")
    ; __line = 178
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+hs.boardObjHistory[currentval].hintIndexes[i]).classList.add(\"hint-cell\");\n              }\n            }\n            document.querySelector(\".tracker-")
    ; __line = 181
    ; __append(escapeFn( high_score._id))
    ; __append("\").addEventListener('input', () => {\n              prephs();\n            });;\n            prephs();\n          </script>\n          ")
    ; __line = 186
    ; 
          }
        }); 
    ; __line = 188
    ; __append(" -->\n\n      </section>\n\n      ")
    ; __line = 192
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n</html>\n")
    ; __line = 195
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
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel=\"stylesheet\"  href=\"/styles/css/middle.css\">\n        <link rel=\"stylesheet\"  href=\"/styles/css/style.css\">\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n        <link rel=\"icon\" href=\"icons/joystick.png\" type=\"image/icon type\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <script src=\"/socket.io/socket.io.js\"></script>\n        <script src=\"/client_scripts/client_socket.js\"></script>\n    </head>\n\n    <body onload=\"init()\">\n      <%- include(\"includes/header\") %>\n      <%- message %>\n      <button class=\"logout\" type=\"submit\"><img src=\"/styles/img/exit.png\" >Log-out</button>\n      <section class=\"main-section\">\n\n        <div class=\"boxes\">\n          <img src = \"/styles/img/player.png\">\n          <h1>Play solo</h1>\n          <p>Here you can practice to improve your sudoku solving skill.</p>\n          <br>\n          <p>Simply start a game of your chosen difficulty, and play away!</p>\n          <br>\n          <p>Single-player games are not timed, so don't stress. But remember that your moves are recorded, and wrong inputs are penalized. After each game, make sure to review your mistakes by checking your personal single-player games history.</p>\n      \n          <br><hr><br>\n          <form method=\"POST\" action=\"/sudoku/solo_game\">\n            <input type=\"hidden\" value=\"<%- userprofiledata.username %>\" id=\"username\" name=\"username\">\n            <input type=\"hidden\" value=\"<%- userprofiledata.password %>\" id=\"password\" name=\"password\">\n            <label>Difficulty:</label>\n            <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\">\n            <br>\n            <button type=\"submit\"><img src=\"/styles/img/play.png\" >Play Solo</button>\n          </form>\n\n        </div>\n\n        <div class=\"boxes\">\n          <img src = \"/styles/img/high-score.png\">\n          <h1>High Scores</h1>\n          <p>Here you can see a complete history of your single-player and multi-player games, as well as the global highscores to compare your scores with the world!</p>\n          <br>\n          <p>If you can't find your scores on the global highscores list, dont worry! remember that practice makes perfect!</p>\n          <br><hr><br>\n          <form method=\"GET\">\n            <button type=\"submit\" formaction=\"/sudoku/high_scores/<%- userprofiledata.username %>\"><img src=\"/styles/img/list.png\" >Your single-player games</button>\n            <button type=\"submit\"><img src=\"/styles/img/list.png\" >Your multi-player games</button>\n          </form>\n          <br><br><hr><br>\n          <button type=\"submit\"><img src=\"/styles/img/worldwide.png\" >Global single-player highscores</button>\n          <button type=\"submit\"><img src=\"/styles/img/worldwide.png\" >Global multi-player highscores</button>\n        </div>\n\n        <div class=\"boxes\">\n          <img src = \"/styles/img/team.png\">\n          <h1>Play with friends</h1>\n          <p>Join a game, or create a game to play with your friends!</p>\n          <br><hr><br>\n          <form class=\"\" action=\"waitroom\" method=\"post\">\n            <input type=\"hidden\" value=\"create\" id=\"type\" name=\"create\">\n            <label>Difficulty:</label>\n            <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\">\n            <label>Lobby Size:</label>\n            <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"size\" name=\"size\">\n            <button id=\"button1\" type=\"submit\"><img src=\"/styles/img/people.png\" >Create lobby</button>\n            <br><br><hr><br>\n          </form>\n          <form class=\"\" action=\"waitroom\" method=\"post\">\n            <input type=\"hidden\" value=\"join\" id=\"type\" name=\"join\">\n            <label>Lobby Key</label>\n            <input type=\"text\" id=\"key\" name=\"key\">\n            <button id=\"button2\" type=\"submit\"><img src=\"/styles/img/people.png\" >Join lobby</button>\n          </form>\n        </div>\n      </section>\n\n      <%- include(\"includes/footer\") %>\n    </body>\n</html>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n    ")
    ; __line = 2
    ; __append( include("includes/head") )
    ; __append("\n    <head>\n        <link rel=\"stylesheet\"  href=\"/styles/css/middle.css\">\n        <link rel=\"stylesheet\"  href=\"/styles/css/style.css\">\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n        <link rel=\"icon\" href=\"icons/joystick.png\" type=\"image/icon type\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n        <script src=\"/socket.io/socket.io.js\"></script>\n        <script src=\"/client_scripts/client_socket.js\"></script>\n    </head>\n\n    <body onload=\"init()\">\n      ")
    ; __line = 14
    ; __append( include("includes/header") )
    ; __append("\n      ")
    ; __line = 15
    ; __append( message )
    ; __append("\n      <button class=\"logout\" type=\"submit\"><img src=\"/styles/img/exit.png\" >Log-out</button>\n      <section class=\"main-section\">\n\n        <div class=\"boxes\">\n          <img src = \"/styles/img/player.png\">\n          <h1>Play solo</h1>\n          <p>Here you can practice to improve your sudoku solving skill.</p>\n          <br>\n          <p>Simply start a game of your chosen difficulty, and play away!</p>\n          <br>\n          <p>Single-player games are not timed, so don't stress. But remember that your moves are recorded, and wrong inputs are penalized. After each game, make sure to review your mistakes by checking your personal single-player games history.</p>\n      \n          <br><hr><br>\n          <form method=\"POST\" action=\"/sudoku/solo_game\">\n            <input type=\"hidden\" value=\"")
    ; __line = 30
    ; __append( userprofiledata.username )
    ; __append("\" id=\"username\" name=\"username\">\n            <input type=\"hidden\" value=\"")
    ; __line = 31
    ; __append( userprofiledata.password )
    ; __append("\" id=\"password\" name=\"password\">\n            <label>Difficulty:</label>\n            <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\">\n            <br>\n            <button type=\"submit\"><img src=\"/styles/img/play.png\" >Play Solo</button>\n          </form>\n\n        </div>\n\n        <div class=\"boxes\">\n          <img src = \"/styles/img/high-score.png\">\n          <h1>High Scores</h1>\n          <p>Here you can see a complete history of your single-player and multi-player games, as well as the global highscores to compare your scores with the world!</p>\n          <br>\n          <p>If you can't find your scores on the global highscores list, dont worry! remember that practice makes perfect!</p>\n          <br><hr><br>\n          <form method=\"GET\">\n            <button type=\"submit\" formaction=\"/sudoku/high_scores/")
    ; __line = 48
    ; __append( userprofiledata.username )
    ; __append("\"><img src=\"/styles/img/list.png\" >Your single-player games</button>\n            <button type=\"submit\"><img src=\"/styles/img/list.png\" >Your multi-player games</button>\n          </form>\n          <br><br><hr><br>\n          <button type=\"submit\"><img src=\"/styles/img/worldwide.png\" >Global single-player highscores</button>\n          <button type=\"submit\"><img src=\"/styles/img/worldwide.png\" >Global multi-player highscores</button>\n        </div>\n\n        <div class=\"boxes\">\n          <img src = \"/styles/img/team.png\">\n          <h1>Play with friends</h1>\n          <p>Join a game, or create a game to play with your friends!</p>\n          <br><hr><br>\n          <form class=\"\" action=\"waitroom\" method=\"post\">\n            <input type=\"hidden\" value=\"create\" id=\"type\" name=\"create\">\n            <label>Difficulty:</label>\n            <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\">\n            <label>Lobby Size:</label>\n            <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"size\" name=\"size\">\n            <button id=\"button1\" type=\"submit\"><img src=\"/styles/img/people.png\" >Create lobby</button>\n            <br><br><hr><br>\n          </form>\n          <form class=\"\" action=\"waitroom\" method=\"post\">\n            <input type=\"hidden\" value=\"join\" id=\"type\" name=\"join\">\n            <label>Lobby Key</label>\n            <input type=\"text\" id=\"key\" name=\"key\">\n            <button id=\"button2\" type=\"submit\"><img src=\"/styles/img/people.png\" >Join lobby</button>\n          </form>\n        </div>\n      </section>\n\n      ")
    ; __line = 79
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n</html>\n")
    ; __line = 82
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_multidoku = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n    </head>\n    <body onload=\"startTimer()\">\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n\n       \n        <main>\n          <h1>Sudoku</h1>\n          <hr>\n          <h3><span id=\"msg\"><%- locals.message %></span> <%- locals.username %>!</h3>\n          <p>Currently playing a game of difficulty: <span id=\"level\"><%- locals.diff %></span></p>\n          <h2 id = \"errors\">Score: <span id=\"score\"><%- locals.score %></span>\n          <span id=\"minutes\"> 00 </span>\n          <span id=\"seconds\"> 00 </span>\n          <span id=\"miliseconds\"> 000 </span>\n          </h2>\n\n          <div id=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-2\"></div>\n          </div>\n          <form class=\"form\" method=\"POST\">\n              <input type=\"hidden\" value=\"<%- locals.username %>\" id=\"username\" name=\"username\">\n              <input type=\"hidden\" value=\"<%- locals.password %>\" id=\"password\" name=\"password\">\n              <button class=\"logout\" type=\"submit\" formaction=\"/sudoku/solo_game\"><img src=\"/styles/img/exit.png\" >Back to menu</button>\n              <button type=\"button\" onclick=\"showHint();\"><img src=\"/styles/img/lamp.png\">Show Hint!</button>\n              \n              <label>Difficulty</label>\n              <input type=\"range\" min=\"1\" max=\"3\" value=\"<%- locals.diff %>\" id=\"diff\" name=\"diff\">\n              <button type=\"submit\" id=\"startTimer\" onclick=\"window.location.href = 'sudoku';\"><img src=\"/styles/img/refresh.png\">New Game</button>\n            <!-- onclick=\"startTimer()\" -->\n            </div>\n          </form>\n            \n        </main>\n\n       \n      </section>\n      <%- include(\"includes/footer\") %>\n    </body>\n\n    <script src = \"/game/sudoku-solver.js\"></script>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n    ")
    ; __line = 2
    ; __append( include("includes/head") )
    ; __append("\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n    </head>\n    <body onload=\"startTimer()\">\n      ")
    ; __line = 7
    ; __append( include("includes/header") )
    ; __append("\n\n      <section class=\"main-section\">\n\n       \n        <main>\n          <h1>Sudoku</h1>\n          <hr>\n          <h3><span id=\"msg\">")
    ; __line = 15
    ; __append( locals.message )
    ; __append("</span> ")
    ; __append( locals.username )
    ; __append("!</h3>\n          <p>Currently playing a game of difficulty: <span id=\"level\">")
    ; __line = 16
    ; __append( locals.diff )
    ; __append("</span></p>\n          <h2 id = \"errors\">Score: <span id=\"score\">")
    ; __line = 17
    ; __append( locals.score )
    ; __append("</span>\n          <span id=\"minutes\"> 00 </span>\n          <span id=\"seconds\"> 00 </span>\n          <span id=\"miliseconds\"> 000 </span>\n          </h2>\n\n          <div id=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-2\"></div>\n          </div>\n          <form class=\"form\" method=\"POST\">\n              <input type=\"hidden\" value=\"")
    ; __line = 35
    ; __append( locals.username )
    ; __append("\" id=\"username\" name=\"username\">\n              <input type=\"hidden\" value=\"")
    ; __line = 36
    ; __append( locals.password )
    ; __append("\" id=\"password\" name=\"password\">\n              <button class=\"logout\" type=\"submit\" formaction=\"/sudoku/solo_game\"><img src=\"/styles/img/exit.png\" >Back to menu</button>\n              <button type=\"button\" onclick=\"showHint();\"><img src=\"/styles/img/lamp.png\">Show Hint!</button>\n              \n              <label>Difficulty</label>\n              <input type=\"range\" min=\"1\" max=\"3\" value=\"")
    ; __line = 41
    ; __append( locals.diff )
    ; __append("\" id=\"diff\" name=\"diff\">\n              <button type=\"submit\" id=\"startTimer\" onclick=\"window.location.href = 'sudoku';\"><img src=\"/styles/img/refresh.png\">New Game</button>\n            <!-- onclick=\"startTimer()\" -->\n            </div>\n          </form>\n            \n        </main>\n\n       \n      </section>\n      ")
    ; __line = 51
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n\n    <script src = \"/game/sudoku-solver.js\"></script>\n</html>")
    ; __line = 55
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
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n    </head>\n    <body onload=\"startTimer()\">\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n\n       \n        <main>\n          <h1>Sudoku</h1>\n          <hr>\n          <h3><span id=\"msg\"><%- message %></span> <%- pagedata.username %>!</h3>\n          <p>Currently playing a game of difficulty: <span id=\"level\"><%- pagedata.diff %></span></p>\n          <h2 id = \"errors\">Score: <span id=\"score\"><%- pagedata.score %></span>\n          <span id=\"minutes\"> 00 </span>\n          <span id=\"seconds\"> 00 </span>\n          <span id=\"miliseconds\"> 000 </span>\n          </h2>\n\n          <div id=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-2\"></div>\n          </div>\n          <form class=\"form\" method=\"POST\">\n              <input type=\"hidden\" value=\"<%- pagedata.username %>\" id=\"username\" name=\"username\">\n              <input type=\"hidden\" value=\"<%- pagedata.password %>\" id=\"password\" name=\"password\">\n              \n                <button class=\"logout\" type=\"submit\" formaction=\"/sudoku\"><img src=\"/styles/img/exit.png\">Back to menu</button>\n               \n\n              <button type=\"button\" onclick=\"showHint();\"><img src=\"/styles/img/lamp.png\">Show Hint!</button>\n              \n              <label>Difficulty</label>\n              <input type=\"range\" min=\"1\" max=\"3\" value=\"<%- pagedata.diff %>\" id=\"diff\" name=\"diff\">\n              <button type=\"submit\" id=\"startTimer\" formaction=\"/sudoku/solo_game\"><img src=\"/styles/img/refresh.png\">New Game</button>\n            <!-- onclick=\"startTimer()\" -->\n            </div>\n          </form>\n            \n        </main>\n       \n      </section>\n      <%- include(\"includes/footer\") %>\n    </body> \n\n    <script src = \"/client_scripts/api-client.js\"></script>\n    <script src = \"/game/sudoku-solver.js\"></script>\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n    ")
    ; __line = 2
    ; __append( include("includes/head") )
    ; __append("\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n    </head>\n    <body onload=\"startTimer()\">\n      ")
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
    ; __append("</span>\n          <span id=\"minutes\"> 00 </span>\n          <span id=\"seconds\"> 00 </span>\n          <span id=\"miliseconds\"> 000 </span>\n          </h2>\n\n          <div id=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-2\"></div>\n          </div>\n          <form class=\"form\" method=\"POST\">\n              <input type=\"hidden\" value=\"")
    ; __line = 35
    ; __append( pagedata.username )
    ; __append("\" id=\"username\" name=\"username\">\n              <input type=\"hidden\" value=\"")
    ; __line = 36
    ; __append( pagedata.password )
    ; __append("\" id=\"password\" name=\"password\">\n              \n                <button class=\"logout\" type=\"submit\" formaction=\"/sudoku\"><img src=\"/styles/img/exit.png\">Back to menu</button>\n               \n\n              <button type=\"button\" onclick=\"showHint();\"><img src=\"/styles/img/lamp.png\">Show Hint!</button>\n              \n              <label>Difficulty</label>\n              <input type=\"range\" min=\"1\" max=\"3\" value=\"")
    ; __line = 44
    ; __append( pagedata.diff )
    ; __append("\" id=\"diff\" name=\"diff\">\n              <button type=\"submit\" id=\"startTimer\" formaction=\"/sudoku/solo_game\"><img src=\"/styles/img/refresh.png\">New Game</button>\n            <!-- onclick=\"startTimer()\" -->\n            </div>\n          </form>\n            \n        </main>\n       \n      </section>\n      ")
    ; __line = 53
    ; __append( include("includes/footer") )
    ; __append("\n    </body> \n\n    <script src = \"/client_scripts/api-client.js\"></script>\n    <script src = \"/game/sudoku-solver.js\"></script>\n</html>")
    ; __line = 58
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
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n        <script src=\"/js/ejs.min.js\"></script>\n        <script src=\"/js/views.js\"></script>\n        <script src=\"/socket.io/socket.io.js\"></script>\n        <script src=\"/client_scripts/client_socket.js\"></script>\n    </head>\n    <body onload=\"socket_init()\">\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n\n       \n        <main>\n            <h1>Sudoku</h1>\n            <hr>\n            \n                <ul>\n                    <li><h4>Connection Successful</h4></li>\n                    <li>\n                        <h4 id=\"players_ready\"> Ready: <%= ready %></h4>\n                        <h4>Difficulty: <%= diff %></h4>\n                        <h4>Room Size: <%= size %></h4> \n\n                    </li>\n                </ul>\n            </main>\n        </section>\n      <%- include(\"includes/footer\") %>\n    </body>\n\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n    ")
    ; __line = 2
    ; __append( include("includes/head") )
    ; __append("\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n        <script src=\"/js/ejs.min.js\"></script>\n        <script src=\"/js/views.js\"></script>\n        <script src=\"/socket.io/socket.io.js\"></script>\n        <script src=\"/client_scripts/client_socket.js\"></script>\n    </head>\n    <body onload=\"socket_init()\">\n      ")
    ; __line = 11
    ; __append( include("includes/header") )
    ; __append("\n\n      <section class=\"main-section\">\n\n       \n        <main>\n            <h1>Sudoku</h1>\n            <hr>\n            \n                <ul>\n                    <li><h4>Connection Successful</h4></li>\n                    <li>\n                        <h4 id=\"players_ready\"> Ready: ")
    ; __line = 23
    ; __append(escapeFn( ready ))
    ; __append("</h4>\n                        <h4>Difficulty: ")
    ; __line = 24
    ; __append(escapeFn( diff ))
    ; __append("</h4>\n                        <h4>Room Size: ")
    ; __line = 25
    ; __append(escapeFn( size ))
    ; __append("</h4> \n\n                    </li>\n                </ul>\n            </main>\n        </section>\n      ")
    ; __line = 31
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n\n</html>")
    ; __line = 34
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}