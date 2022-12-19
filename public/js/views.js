//EJS Compiled Views - This file was automatically generated on Mon Dec 19 2022 13:24:40 GMT+0100 (Central European Standard Time)
 ejs.views_include = function(locals) {
     
     return function(path, d) {
         console.log("ejs.views_include",path,d);
         return ejs["views_"+path.replace(/\//g,"_").replace(/-/g,"_")]({...d,...locals}, null, ejs.views_include(locals));
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
  , __lines = "<html>\n  <%- include(\"includes/head\") %>\n  <head>\n      <link rel=\"stylesheet\"  href=\"/styles/css/high_scores.css\">\n      <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n      <link rel=\"icon\" href=\"icons/joystick.png\" type=\"image/icon type\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  </head>\n\n    <body>\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n        <div class=\"head\">\n          <h1>Singleplayer highscores and game history</h1>\n          <form method=\"GET\" action=\"/sudoku\">\n            <button class=\"logout\" type=\"submit\"><img src=\"/styles/img/exit.png\">Back to menu</button>\n          </form>\n        </div>\n        <% \n          var rank = 1;\n          if (high_scores.length == 0) {\n            %> \n            <h3>You need to finish at least one game to see anything here!</h3>\n            <%\n          }\n          high_scores.forEach(high_score => {\n          if (high_score.game == \"solo\") {\n          %>\n          <form method=\"GET\" action=\"/sudoku/high_scores\">\n            <ul>\n              <li>\n                <div>Player: <%= high_score.username%></div>\n                <div>Game mode: <%= high_score.game%></div>\n                <div>Date played: <%= high_score.dateplayed%></div>\n                <div>Rank: <span><%-rank++%></span><img src=\"/styles/img/award.png\"></div>\n              </li>\n              <li>\n                <div>Total moves: <%= high_score.totalMoves%></div>\n                <div class=\"score\">Score: <%= high_score.score%></div>\n                <div>Hints used: <%= high_score.boardObjHistory[high_score.totalMoves - 1].hintIndexes.length%></div>\n              </li>\n              <li>\n                <div id=\"grid\" class=\"grid-<%= high_score._id%>\">\n                  <div class=\"smallgrid\" id=\"grid-0-0\">\n                    <input id=\"<%= high_score._id%>-input-0\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-1\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-2\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-9\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-10\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-11\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-18\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-19\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-20\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-0\">\n                    <input id=\"<%= high_score._id%>-input-3\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-4\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-5\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-12\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-13\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-14\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-21\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-22\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-23\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-0\">\n                    <input id=\"<%= high_score._id%>-input-6\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-7\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-8\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-15\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-16\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-17\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-24\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-25\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-26\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-0-1\">\n                    <input id=\"<%= high_score._id%>-input-27\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= high_score._id%>-input-28\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-29\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-36\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-37\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-38\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-45\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-46\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-47\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-1\">\n                    <input id=\"<%= high_score._id%>-input-30\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= high_score._id%>-input-31\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-32\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-39\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-40\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-41\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-48\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-49\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-50\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-1\">\n                    <input id=\"<%= high_score._id%>-input-33\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= high_score._id%>-input-34\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-35\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-42\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-43\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-44\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-51\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-52\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-53\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    </div>\n                  <div class=\"smallgrid\" id=\"grid-0-2\">\n                    <input id=\"<%= high_score._id%>-input-54\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= high_score._id%>-input-55\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-56\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-63\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-64\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-65\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-72\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-73\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-74\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-2\">\n                    <input id=\"<%= high_score._id%>-input-57\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-58\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-59\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-66\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-67\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-68\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-75\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-76\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-77\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-2\">\n                    <input id=\"<%= high_score._id%>-input-60\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-61\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-62\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-69\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-70\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-71\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-78\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-79\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-80\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div>\n                  <span>Track time: <span id=\"time-<%= high_score._id%>\"></span></span>\n                </div>\n                <div>\n                  <span class=\"slider\">Track moves: <span id=\"value-<%= high_score._id%>\"></span><input class=\"tracker-<%= high_score._id%>\" type=\"range\" id=\"moves\" min=\"0\" max=\"<%=high_score.totalMoves - 1%>\" value=\"<%= high_score.totalMoves - 1%>\"></span>\n                </div>\n                <div>\n                  <span>Track score: <span id=\"score-<%= high_score._id%>\"></span></span>\n                </div>\n              </li>\n            </ul>\n          </form>\n          <script>\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n\n            function prephs<%= high_score._id %>() {\n\n              var currentval = document.querySelector(\".tracker-<%= high_score._id%>\").value;\n              var hs = <%-JSON.stringify(high_score)%>;\n\n              var movecount = document.getElementById(\"value-<%= high_score._id%>\").innerHTML = +currentval + 1;\n              var scorecount = document.getElementById(\"score-<%= high_score._id%>\").innerHTML = hs.boardObjHistory[currentval].score;\n              var timecount = document.getElementById(\"time-<%= high_score._id%>\").innerHTML = hs.boardObjHistory[currentval].time;\n\n              for (let i = 0; i < 81; i++) {\n                //get cell\n                var cell = document.getElementById(\"<%= high_score._id%>-input-\"+i);\n\n                //set numbers\n                cell.value = hs.boardObjHistory[currentval].fullboard[i];\n\n                cell.disabled = true;\n\n                //remove extra classes\n                cell.classList.remove(\"wrong-cell\");\n                cell.classList.remove(\"correct-cell\");\n                cell.classList.remove(\"hint-cell\");\n                cell.classList.remove(\"givennumber\");\n\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].correctIndexes.length ; i++) {\n                document.getElementById(\"<%= high_score._id%>-input-\"+hs.boardObjHistory[currentval].correctIndexes[i]).classList.add(\"correct-cell\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].wrongIndexes.length ; i++) {\n                document.getElementById(\"<%= high_score._id%>-input-\"+hs.boardObjHistory[currentval].wrongIndexes[i]).classList.add(\"wrong-cell\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].givenNumberIndexes.length ; i++) {\n                document.getElementById(\"<%= high_score._id%>-input-\"+hs.boardObjHistory[currentval].givenNumberIndexes[i]).classList.add(\"givennumber\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].hintIndexes.length ; i++) {\n                document.getElementById(\"<%= high_score._id%>-input-\"+hs.boardObjHistory[currentval].hintIndexes[i]).classList.add(\"hint-cell\");\n              }\n            }\n\n            document.querySelector(\".tracker-<%= high_score._id%>\").addEventListener('input', () => {\n              prephs<%= high_score._id %>();\n            });\n\n            prephs<%= high_score._id %>();\n          </script>\n          <%\n          }\n        }); %>\n\n      </section>\n      <hr>\n      <section class=\"main-section\">\n        <h1>Multiplayer - history</h1>\n        <% \n          let rel = false;\n          multi_high_scores.forEach(mhs => {\n            %>\n            <form method=\"GET\" action=\"/sudoku/high_scores\">\n            <ul>\n              <li>\n                <div>Game mode: Multiplayer</div>\n                <div>Date played: <%= mhs.dateplayed%></div>\n              </li>\n              <li>\n                Players:\n              </li>\n              <li>\n                    <% mhs.connected_players.forEach(p => {\n                      %>\n                      <div style=\"color: <%-p.color%>;\"><%-p.player%></div>\n                      <%\n                    });%>\n              </li>\n              <li>\n                <% mhs.connected_players.forEach(p => {\n                      %>\n                \n                <div id=\"grid\" class=\"grid-<%= mhs._id%>-<%= p.player%>\">\n                  <div class=\"smallgrid\" id=\"grid-0-0\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-0\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-1\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-2\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-9\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-10\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-11\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-18\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-19\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-20\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-0\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-3\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-4\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-5\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-12\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-13\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-14\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-21\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-22\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-23\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-0\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-6\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-7\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-8\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-15\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-16\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-17\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-24\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-25\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-26\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-0-1\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-27\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-28\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-29\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-36\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-37\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-38\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-45\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-46\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-47\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-1\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-30\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-31\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-32\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-39\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-40\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-41\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-48\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-49\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-50\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-1\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-33\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-34\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-35\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-42\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-43\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-44\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-51\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-52\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-53\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    </div>\n                  <div class=\"smallgrid\" id=\"grid-0-2\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-54\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-55\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-56\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-63\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-64\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-65\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-72\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-73\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-74\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-2\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-57\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-58\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-59\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-66\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-67\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-68\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-75\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-76\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-77\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-2\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-60\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-61\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-62\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-69\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-70\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-71\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-78\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-79\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-80\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                </div>\n                \n                <%\n                    });%>\n              </li>\n              <li>\n                <div>\n                  <span class=\"slider\">Track moves: <span id=\"value-<%= mhs._id%>\"></span><input class=\"tracker-<%= mhs._id%>\" type=\"range\" id=\"moves\" min=\"0\" max=\"\" value=\"\"></span>\n                </div>\n              </li>\n              <script>\n                function prepremhs<%-mhs._id%>() {\n                  var mhss = <%-JSON.stringify(mhs)%>;\n                  var maxmoves = 0;\n                  mhss.connected_players.forEach(p => {\n                    if (p.boardObjArray.length > maxmoves) maxmoves = p.boardObjArray.length;\n                  });\n                  prepmhs<%-mhs._id%>(maxmoves);\n\n                  let slider = document.querySelector('input.tracker-<%= mhs._id%>');\n                  slider.max = maxmoves;\n                  slider.value = maxmoves;\n                  slider.addEventListener('input', (event) => {\n                    prepmhs<%-mhs._id%>(event.target.value);\n                  });\n\n                }\n                function prepmhs<%-mhs._id%>(n) {\n                  var mhss = <%-JSON.stringify(mhs)%>;\n                  mhss.connected_players.forEach(p => {\n                    if (n > p.boardObjArray.length) n = p.boardObjArray.length;\n                    for (let i = 0; i < 81; i++) {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.value =  p.boardObjArray[n - 1].fullboard[i];\n                      if (cell.value == 0) cell.value = '';\n                      cell.className = \"\"\n                    }\n                    p.boardObjArray[n - 1].givenNumberIndexes.forEach(i => {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.classList.add(\"givennumber\");\n                    });\n                    p.boardObjArray[n - 1].correctIndexes.forEach(i => {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.classList.add(\"correct-cell\");\n                    });\n                    p.boardObjArray[n - 1].wrongIndexes.forEach(i => {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.classList.add(\"wrong-cell\");\n                    });\n                  });\n\n                  \n\n\n                }\n                prepremhs<%-mhs._id%>();\n              </script>\n            </ul>\n          </form>\n            <%\n        }); %>\n      </section>\n\n      <%- include(\"includes/footer\") %>\n    </body>\n</html>\n"
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
    ; __append("\n\n      <section class=\"main-section\">\n        <div class=\"head\">\n          <h1>Singleplayer highscores and game history</h1>\n          <form method=\"GET\" action=\"/sudoku\">\n            <button class=\"logout\" type=\"submit\"><img src=\"/styles/img/exit.png\">Back to menu</button>\n          </form>\n        </div>\n        ")
    ; __line = 20
    ;  
          var rank = 1;
          if (high_scores.length == 0) {
            
    ; __line = 23
    ; __append(" \n            <h3>You need to finish at least one game to see anything here!</h3>\n            ")
    ; __line = 25
    ; 
          }
          high_scores.forEach(high_score => {
          if (high_score.game == "solo") {
          
    ; __line = 29
    ; __append("\n          <form method=\"GET\" action=\"/sudoku/high_scores\">\n            <ul>\n              <li>\n                <div>Player: ")
    ; __line = 33
    ; __append(escapeFn( high_score.username))
    ; __append("</div>\n                <div>Game mode: ")
    ; __line = 34
    ; __append(escapeFn( high_score.game))
    ; __append("</div>\n                <div>Date played: ")
    ; __line = 35
    ; __append(escapeFn( high_score.dateplayed))
    ; __append("</div>\n                <div>Rank: <span>")
    ; __line = 36
    ; __append(rank++)
    ; __append("</span><img src=\"/styles/img/award.png\"></div>\n              </li>\n              <li>\n                <div>Total moves: ")
    ; __line = 39
    ; __append(escapeFn( high_score.totalMoves))
    ; __append("</div>\n                <div class=\"score\">Score: ")
    ; __line = 40
    ; __append(escapeFn( high_score.score))
    ; __append("</div>\n                <div>Hints used: ")
    ; __line = 41
    ; __append(escapeFn( high_score.boardObjHistory[high_score.totalMoves - 1].hintIndexes.length))
    ; __append("</div>\n              </li>\n              <li>\n                <div id=\"grid\" class=\"grid-")
    ; __line = 44
    ; __append(escapeFn( high_score._id))
    ; __append("\">\n                  <div class=\"smallgrid\" id=\"grid-0-0\">\n                    <input id=\"")
    ; __line = 46
    ; __append(escapeFn( high_score._id))
    ; __append("-input-0\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 47
    ; __append(escapeFn( high_score._id))
    ; __append("-input-1\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 48
    ; __append(escapeFn( high_score._id))
    ; __append("-input-2\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 49
    ; __append(escapeFn( high_score._id))
    ; __append("-input-9\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 50
    ; __append(escapeFn( high_score._id))
    ; __append("-input-10\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 51
    ; __append(escapeFn( high_score._id))
    ; __append("-input-11\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 52
    ; __append(escapeFn( high_score._id))
    ; __append("-input-18\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 53
    ; __append(escapeFn( high_score._id))
    ; __append("-input-19\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 54
    ; __append(escapeFn( high_score._id))
    ; __append("-input-20\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-0\">\n                    <input id=\"")
    ; __line = 57
    ; __append(escapeFn( high_score._id))
    ; __append("-input-3\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 58
    ; __append(escapeFn( high_score._id))
    ; __append("-input-4\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 59
    ; __append(escapeFn( high_score._id))
    ; __append("-input-5\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 60
    ; __append(escapeFn( high_score._id))
    ; __append("-input-12\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 61
    ; __append(escapeFn( high_score._id))
    ; __append("-input-13\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 62
    ; __append(escapeFn( high_score._id))
    ; __append("-input-14\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 63
    ; __append(escapeFn( high_score._id))
    ; __append("-input-21\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 64
    ; __append(escapeFn( high_score._id))
    ; __append("-input-22\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 65
    ; __append(escapeFn( high_score._id))
    ; __append("-input-23\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-0\">\n                    <input id=\"")
    ; __line = 68
    ; __append(escapeFn( high_score._id))
    ; __append("-input-6\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 69
    ; __append(escapeFn( high_score._id))
    ; __append("-input-7\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 70
    ; __append(escapeFn( high_score._id))
    ; __append("-input-8\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 71
    ; __append(escapeFn( high_score._id))
    ; __append("-input-15\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 72
    ; __append(escapeFn( high_score._id))
    ; __append("-input-16\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 73
    ; __append(escapeFn( high_score._id))
    ; __append("-input-17\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 74
    ; __append(escapeFn( high_score._id))
    ; __append("-input-24\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 75
    ; __append(escapeFn( high_score._id))
    ; __append("-input-25\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 76
    ; __append(escapeFn( high_score._id))
    ; __append("-input-26\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-0-1\">\n                    <input id=\"")
    ; __line = 79
    ; __append(escapeFn( high_score._id))
    ; __append("-input-27\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 80
    ; __append(escapeFn( high_score._id))
    ; __append("-input-28\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 81
    ; __append(escapeFn( high_score._id))
    ; __append("-input-29\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 82
    ; __append(escapeFn( high_score._id))
    ; __append("-input-36\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 83
    ; __append(escapeFn( high_score._id))
    ; __append("-input-37\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 84
    ; __append(escapeFn( high_score._id))
    ; __append("-input-38\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 85
    ; __append(escapeFn( high_score._id))
    ; __append("-input-45\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 86
    ; __append(escapeFn( high_score._id))
    ; __append("-input-46\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 87
    ; __append(escapeFn( high_score._id))
    ; __append("-input-47\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-1\">\n                    <input id=\"")
    ; __line = 90
    ; __append(escapeFn( high_score._id))
    ; __append("-input-30\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 91
    ; __append(escapeFn( high_score._id))
    ; __append("-input-31\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 92
    ; __append(escapeFn( high_score._id))
    ; __append("-input-32\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 93
    ; __append(escapeFn( high_score._id))
    ; __append("-input-39\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 94
    ; __append(escapeFn( high_score._id))
    ; __append("-input-40\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 95
    ; __append(escapeFn( high_score._id))
    ; __append("-input-41\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 96
    ; __append(escapeFn( high_score._id))
    ; __append("-input-48\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 97
    ; __append(escapeFn( high_score._id))
    ; __append("-input-49\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 98
    ; __append(escapeFn( high_score._id))
    ; __append("-input-50\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-1\">\n                    <input id=\"")
    ; __line = 101
    ; __append(escapeFn( high_score._id))
    ; __append("-input-33\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 102
    ; __append(escapeFn( high_score._id))
    ; __append("-input-34\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 103
    ; __append(escapeFn( high_score._id))
    ; __append("-input-35\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 104
    ; __append(escapeFn( high_score._id))
    ; __append("-input-42\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 105
    ; __append(escapeFn( high_score._id))
    ; __append("-input-43\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 106
    ; __append(escapeFn( high_score._id))
    ; __append("-input-44\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 107
    ; __append(escapeFn( high_score._id))
    ; __append("-input-51\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 108
    ; __append(escapeFn( high_score._id))
    ; __append("-input-52\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 109
    ; __append(escapeFn( high_score._id))
    ; __append("-input-53\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    </div>\n                  <div class=\"smallgrid\" id=\"grid-0-2\">\n                    <input id=\"")
    ; __line = 112
    ; __append(escapeFn( high_score._id))
    ; __append("-input-54\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 113
    ; __append(escapeFn( high_score._id))
    ; __append("-input-55\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 114
    ; __append(escapeFn( high_score._id))
    ; __append("-input-56\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 115
    ; __append(escapeFn( high_score._id))
    ; __append("-input-63\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 116
    ; __append(escapeFn( high_score._id))
    ; __append("-input-64\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 117
    ; __append(escapeFn( high_score._id))
    ; __append("-input-65\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 118
    ; __append(escapeFn( high_score._id))
    ; __append("-input-72\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 119
    ; __append(escapeFn( high_score._id))
    ; __append("-input-73\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 120
    ; __append(escapeFn( high_score._id))
    ; __append("-input-74\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-2\">\n                    <input id=\"")
    ; __line = 123
    ; __append(escapeFn( high_score._id))
    ; __append("-input-57\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 124
    ; __append(escapeFn( high_score._id))
    ; __append("-input-58\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 125
    ; __append(escapeFn( high_score._id))
    ; __append("-input-59\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 126
    ; __append(escapeFn( high_score._id))
    ; __append("-input-66\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 127
    ; __append(escapeFn( high_score._id))
    ; __append("-input-67\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 128
    ; __append(escapeFn( high_score._id))
    ; __append("-input-68\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 129
    ; __append(escapeFn( high_score._id))
    ; __append("-input-75\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 130
    ; __append(escapeFn( high_score._id))
    ; __append("-input-76\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 131
    ; __append(escapeFn( high_score._id))
    ; __append("-input-77\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-2\">\n                    <input id=\"")
    ; __line = 134
    ; __append(escapeFn( high_score._id))
    ; __append("-input-60\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 135
    ; __append(escapeFn( high_score._id))
    ; __append("-input-61\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 136
    ; __append(escapeFn( high_score._id))
    ; __append("-input-62\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 137
    ; __append(escapeFn( high_score._id))
    ; __append("-input-69\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 138
    ; __append(escapeFn( high_score._id))
    ; __append("-input-70\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 139
    ; __append(escapeFn( high_score._id))
    ; __append("-input-71\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 140
    ; __append(escapeFn( high_score._id))
    ; __append("-input-78\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 141
    ; __append(escapeFn( high_score._id))
    ; __append("-input-79\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 142
    ; __append(escapeFn( high_score._id))
    ; __append("-input-80\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div>\n                  <span>Track time: <span id=\"time-")
    ; __line = 148
    ; __append(escapeFn( high_score._id))
    ; __append("\"></span></span>\n                </div>\n                <div>\n                  <span class=\"slider\">Track moves: <span id=\"value-")
    ; __line = 151
    ; __append(escapeFn( high_score._id))
    ; __append("\"></span><input class=\"tracker-")
    ; __append(escapeFn( high_score._id))
    ; __append("\" type=\"range\" id=\"moves\" min=\"0\" max=\"")
    ; __append(escapeFn(high_score.totalMoves - 1))
    ; __append("\" value=\"")
    ; __append(escapeFn( high_score.totalMoves - 1))
    ; __append("\"></span>\n                </div>\n                <div>\n                  <span>Track score: <span id=\"score-")
    ; __line = 154
    ; __append(escapeFn( high_score._id))
    ; __append("\"></span></span>\n                </div>\n              </li>\n            </ul>\n          </form>\n          <script>\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n\n            function prephs")
    ; __line = 166
    ; __append(escapeFn( high_score._id ))
    ; __append("() {\n\n              var currentval = document.querySelector(\".tracker-")
    ; __line = 168
    ; __append(escapeFn( high_score._id))
    ; __append("\").value;\n              var hs = ")
    ; __line = 169
    ; __append(JSON.stringify(high_score))
    ; __append(";\n\n              var movecount = document.getElementById(\"value-")
    ; __line = 171
    ; __append(escapeFn( high_score._id))
    ; __append("\").innerHTML = +currentval + 1;\n              var scorecount = document.getElementById(\"score-")
    ; __line = 172
    ; __append(escapeFn( high_score._id))
    ; __append("\").innerHTML = hs.boardObjHistory[currentval].score;\n              var timecount = document.getElementById(\"time-")
    ; __line = 173
    ; __append(escapeFn( high_score._id))
    ; __append("\").innerHTML = hs.boardObjHistory[currentval].time;\n\n              for (let i = 0; i < 81; i++) {\n                //get cell\n                var cell = document.getElementById(\"")
    ; __line = 177
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+i);\n\n                //set numbers\n                cell.value = hs.boardObjHistory[currentval].fullboard[i];\n\n                cell.disabled = true;\n\n                //remove extra classes\n                cell.classList.remove(\"wrong-cell\");\n                cell.classList.remove(\"correct-cell\");\n                cell.classList.remove(\"hint-cell\");\n                cell.classList.remove(\"givennumber\");\n\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].correctIndexes.length ; i++) {\n                document.getElementById(\"")
    ; __line = 192
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+hs.boardObjHistory[currentval].correctIndexes[i]).classList.add(\"correct-cell\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].wrongIndexes.length ; i++) {\n                document.getElementById(\"")
    ; __line = 195
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+hs.boardObjHistory[currentval].wrongIndexes[i]).classList.add(\"wrong-cell\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].givenNumberIndexes.length ; i++) {\n                document.getElementById(\"")
    ; __line = 198
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+hs.boardObjHistory[currentval].givenNumberIndexes[i]).classList.add(\"givennumber\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].hintIndexes.length ; i++) {\n                document.getElementById(\"")
    ; __line = 201
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+hs.boardObjHistory[currentval].hintIndexes[i]).classList.add(\"hint-cell\");\n              }\n            }\n\n            document.querySelector(\".tracker-")
    ; __line = 205
    ; __append(escapeFn( high_score._id))
    ; __append("\").addEventListener('input', () => {\n              prephs")
    ; __line = 206
    ; __append(escapeFn( high_score._id ))
    ; __append("();\n            });\n\n            prephs")
    ; __line = 209
    ; __append(escapeFn( high_score._id ))
    ; __append("();\n          </script>\n          ")
    ; __line = 211
    ; 
          }
        }); 
    ; __line = 213
    ; __append("\n\n      </section>\n      <hr>\n      <section class=\"main-section\">\n        <h1>Multiplayer - history</h1>\n        ")
    ; __line = 219
    ;  
          let rel = false;
          multi_high_scores.forEach(mhs => {
            
    ; __line = 222
    ; __append("\n            <form method=\"GET\" action=\"/sudoku/high_scores\">\n            <ul>\n              <li>\n                <div>Game mode: Multiplayer</div>\n                <div>Date played: ")
    ; __line = 227
    ; __append(escapeFn( mhs.dateplayed))
    ; __append("</div>\n              </li>\n              <li>\n                Players:\n              </li>\n              <li>\n                    ")
    ; __line = 233
    ;  mhs.connected_players.forEach(p => {
                      
    ; __line = 234
    ; __append("\n                      <div style=\"color: ")
    ; __line = 235
    ; __append(p.color)
    ; __append(";\">")
    ; __append(p.player)
    ; __append("</div>\n                      ")
    ; __line = 236
    ; 
                    });
    ; __line = 237
    ; __append("\n              </li>\n              <li>\n                ")
    ; __line = 240
    ;  mhs.connected_players.forEach(p => {
                      
    ; __line = 241
    ; __append("\n                \n                <div id=\"grid\" class=\"grid-")
    ; __line = 243
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("\">\n                  <div class=\"smallgrid\" id=\"grid-0-0\">\n                    <input id=\"")
    ; __line = 245
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-0\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 246
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-1\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 247
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-2\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 248
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-9\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 249
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-10\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 250
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-11\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 251
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-18\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 252
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-19\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 253
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-20\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-0\">\n                    <input id=\"")
    ; __line = 256
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-3\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 257
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-4\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 258
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-5\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 259
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-12\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 260
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-13\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 261
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-14\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 262
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-21\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 263
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-22\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 264
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-23\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-0\">\n                    <input id=\"")
    ; __line = 267
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-6\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 268
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-7\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 269
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-8\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 270
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-15\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 271
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-16\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 272
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-17\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 273
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-24\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 274
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-25\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 275
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-26\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-0-1\">\n                    <input id=\"")
    ; __line = 278
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-27\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 279
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-28\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 280
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-29\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 281
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-36\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 282
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-37\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 283
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-38\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 284
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-45\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 285
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-46\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 286
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-47\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-1\">\n                    <input id=\"")
    ; __line = 289
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-30\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 290
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-31\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 291
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-32\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 292
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-39\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 293
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-40\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 294
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-41\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 295
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-48\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 296
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-49\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 297
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-50\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-1\">\n                    <input id=\"")
    ; __line = 300
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-33\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 301
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-34\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 302
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-35\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 303
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-42\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 304
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-43\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 305
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-44\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 306
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-51\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 307
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-52\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 308
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-53\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    </div>\n                  <div class=\"smallgrid\" id=\"grid-0-2\">\n                    <input id=\"")
    ; __line = 311
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-54\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 312
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-55\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 313
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-56\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 314
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-63\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 315
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-64\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 316
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-65\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 317
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-72\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 318
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-73\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 319
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-74\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-2\">\n                    <input id=\"")
    ; __line = 322
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-57\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 323
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-58\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 324
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-59\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 325
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-66\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 326
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-67\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 327
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-68\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 328
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-75\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 329
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-76\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 330
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-77\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-2\">\n                    <input id=\"")
    ; __line = 333
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-60\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 334
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-61\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 335
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-62\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 336
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-69\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 337
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-70\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 338
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-71\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 339
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-78\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 340
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-79\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 341
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-80\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                </div>\n                \n                ")
    ; __line = 345
    ; 
                    });
    ; __line = 346
    ; __append("\n              </li>\n              <li>\n                <div>\n                  <span class=\"slider\">Track moves: <span id=\"value-")
    ; __line = 350
    ; __append(escapeFn( mhs._id))
    ; __append("\"></span><input class=\"tracker-")
    ; __append(escapeFn( mhs._id))
    ; __append("\" type=\"range\" id=\"moves\" min=\"0\" max=\"\" value=\"\"></span>\n                </div>\n              </li>\n              <script>\n                function prepremhs")
    ; __line = 354
    ; __append(mhs._id)
    ; __append("() {\n                  var mhss = ")
    ; __line = 355
    ; __append(JSON.stringify(mhs))
    ; __append(";\n                  var maxmoves = 0;\n                  mhss.connected_players.forEach(p => {\n                    if (p.boardObjArray.length > maxmoves) maxmoves = p.boardObjArray.length;\n                  });\n                  prepmhs")
    ; __line = 360
    ; __append(mhs._id)
    ; __append("(maxmoves);\n\n                  let slider = document.querySelector('input.tracker-")
    ; __line = 362
    ; __append(escapeFn( mhs._id))
    ; __append("');\n                  slider.max = maxmoves;\n                  slider.value = maxmoves;\n                  slider.addEventListener('input', (event) => {\n                    prepmhs")
    ; __line = 366
    ; __append(mhs._id)
    ; __append("(event.target.value);\n                  });\n\n                }\n                function prepmhs")
    ; __line = 370
    ; __append(mhs._id)
    ; __append("(n) {\n                  var mhss = ")
    ; __line = 371
    ; __append(JSON.stringify(mhs))
    ; __append(";\n                  mhss.connected_players.forEach(p => {\n                    if (n > p.boardObjArray.length) n = p.boardObjArray.length;\n                    for (let i = 0; i < 81; i++) {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.value =  p.boardObjArray[n - 1].fullboard[i];\n                      if (cell.value == 0) cell.value = '';\n                      cell.className = \"\"\n                    }\n                    p.boardObjArray[n - 1].givenNumberIndexes.forEach(i => {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.classList.add(\"givennumber\");\n                    });\n                    p.boardObjArray[n - 1].correctIndexes.forEach(i => {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.classList.add(\"correct-cell\");\n                    });\n                    p.boardObjArray[n - 1].wrongIndexes.forEach(i => {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.classList.add(\"wrong-cell\");\n                    });\n                  });\n\n                  \n\n\n                }\n                prepremhs")
    ; __line = 398
    ; __append(mhs._id)
    ; __append("();\n              </script>\n            </ul>\n          </form>\n            ")
    ; __line = 402
    ; 
        }); 
    ; __line = 403
    ; __append("\n      </section>\n\n      ")
    ; __line = 406
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n</html>\n")
    ; __line = 409
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
  , __lines = "<main class = \"main-home\">\n  <p>Welcome to sudoku online, please login and play!</p>\n    <div class=\"box\">\n      <form class=\"form\" method=\"POST\" action=\"/sudoku\">\n        <h3><%- msg %></h3>\n        <div class=\"inputBox\">\n          <label>Username</label>\n          <input type=\"text\" required = \"required\" id=\"username\" name=\"username\">\n          <br>\n          <label>Password</label>\n          <input type=\"password\" required = \"required\" id=\"password\" name=\"password\">\n          <br>\n          <!-- <label>Difficulty</label>\n          <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\"> -->\n          <br>\n          <button type=\"submit\"><img src=\"/styles/img/enter.png\">Login</button>\n          <!-- <button type=\"submit\" formaction=\"/sudoku/solo_game\">Play Solo</button> -->\n        </div>\n      </form>\n\n    </div>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main class = \"main-home\">\n  <p>Welcome to sudoku online, please login and play!</p>\n    <div class=\"box\">\n      <form class=\"form\" method=\"POST\" action=\"/sudoku\">\n        <h3>")
    ; __line = 5
    ; __append( msg )
    ; __append("</h3>\n        <div class=\"inputBox\">\n          <label>Username</label>\n          <input type=\"text\" required = \"required\" id=\"username\" name=\"username\">\n          <br>\n          <label>Password</label>\n          <input type=\"password\" required = \"required\" id=\"password\" name=\"password\">\n          <br>\n          <!-- <label>Difficulty</label>\n          <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\"> -->\n          <br>\n          <button type=\"submit\"><img src=\"/styles/img/enter.png\">Login</button>\n          <!-- <button type=\"submit\" formaction=\"/sudoku/solo_game\">Play Solo</button> -->\n        </div>\n      </form>\n\n    </div>\n</main>")
    ; __line = 22
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_mainsection = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<% \n      let playerIsInAnyLobby = false; \n      let playersLobby;\n      let playerObj;\n      lobbies.forEach( lobby => { \n        lobby.connected_players.forEach(p => {\n                      if (p.player == userdata.username) {\n                        playerIsInAnyLobby = true;\n                        playerObj = p;\n                        playersLobby = lobby;\n                      }\n                    });\n      });\n%>\n<section class=\"main-section\">\n<% \nif (!playerIsInAnyLobby || (playerIsInAnyLobby && playersLobby.lobbyOpen))\n{\n%>\n<link rel=\"stylesheet\"  href=\"/styles/css/middle.css\">\n<div class=\"boxes\">\n    <img src = \"/styles/img/player.png\">\n    <h1>Play solo</h1>\n    <p>Here you can practice to improve your sudoku solving skill.</p>\n    <br>\n    <p>Simply start a game of your chosen difficulty, and play away!</p>\n    <br>\n    <p>Single-player games are not timed, so don't stress. But remember that your moves are recorded, and wrong inputs are penalized. After each game, make sure to review your mistakes by checking your personal single-player games history.</p>\n\n    <br><hr><br>\n    <form method=\"POST\" action=\"/sudoku/solo_game\">\n      <label>Difficulty:</label>\n      <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\">\n      <br>\n      <button type=\"submit\"><img src=\"/styles/img/play.png\" >Play Solo</button>\n    </form>\n\n  </div>\n\n  <div class=\"boxes\">\n    <img src = \"/styles/img/high-score.png\">\n    <h1>High Scores</h1>\n    <p>Here you can see a complete history of your single-player and multi-player games, as well as the global highscores to compare your scores with the world!</p>\n    <br>\n    <p>If you can't find your scores on the global highscores list, dont worry! remember that practice makes perfect!</p>\n    <br><hr><br>\n    <form method=\"GET\">\n      <button type=\"submit\" formaction=\"/sudoku/high_scores/<%- userdata.username %>\"><img src=\"/styles/img/list.png\" >Your games history and highscores</button>\n      <br><br><hr><br>\n      <button type=\"submit\" formaction=\"/sudoku/global_high_scores/\"><img src=\"/styles/img/worldwide.png\" >Global games history and highscores</button>\n    </form>\n  </div>\n\n  <div class=\"boxes\">\n    <img src = \"/styles/img/team.png\">\n    <h1>Play with friends</h1>\n    <p>Join a game, or create a game to play with your friends!</p>\n    <br><hr><br>\n    <form class=\"\">\n      <input type=\"hidden\" value=\"create\" id=\"type\" name=\"create\">\n      <label>Difficulty: <span id=\"diff-value\"></span></label>\n      <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"mpdiff\" name=\"mpdiff\">\n      <label>Lobby Size: <span id=\"value\"></span></label>\n      <input type=\"range\" min=\"2\" max=\"4\" value=\"3\" id=\"size\" name=\"size\">\n      <% \n      if (!playerIsInAnyLobby) {\n        %> \n        <button id=\"hostgame\" type=\"button\" onclick=\"host();\"><img src=\"/styles/img/people.png\" >Create lobby</button>\n        <%\n      }\n      %>\n      <br><br><hr><br>\n    </form>\n    <%\n    lobbies.forEach( lobby => { \n      let playerIsInThisLobby = false; \n      %>\n      <div style=\"background-color: rgb(66, 66, 66); border-radius: 5px; margin: 10px; padding: 10px;\">\n        <h4>Lobby ID: <%= lobby.id %></h4>\n                  <h4>Difficulty: <%= lobby.lobbyDiff %></h4>\n                  <h4>Room Size: <%= lobby.lobbySize %></h4>\n                  <h4> Players: </h4>\n                  <% \n                  lobby.connected_players.forEach(p => {\n                      if (p.player == userdata.username) {\n                        playerIsInAnyLobby = true;\n                        playerIsInThisLobby = true;\n                      }\n                      %>\n                      <div style=\"color: <%-p.color%>;\"><li><%-p.player%></li></div>\n                      \n                      <%\n                  });%>\n        <div>\n          <% \n          if (playerIsInThisLobby) {\n            %> \n              <button type=\"submit\" onclick=\"leave(<%=lobby.id%>);\">Leave</button>\n            <%\n          }\n          else if (!playerIsInAnyLobby){\n            if (lobby.lobbyOpen)\n                {\n            %>\n              <button type=\"submit\" onclick=\"join(<%=lobby.id%>);\">Join</button>\n            <%\n                }\n                else {\n                    %>\n                    <button type=\"submit\" disabled>GAME ALREADY IN PROGRESS</button>\n                    <%\n                }\n          }\n          \n          %>\n        </div>\n      </div>\n    <% }) %>\n  </div>\n  <% } else {\n  %>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n        <main>\n        <span id=\"gamemessage\">\n        <p>Currently playing a game of difficulty: <span id=\"level\"><%- playersLobby.lobbyDiff %></span></p>\n        </span>\n        <p>Players:</p>\n        <% \n          playersLobby.connected_players.forEach(p => {\n            %>\n            <div style=\"color: <%-p.color%>;\"><li><%-p.player%>, score:<%-p.boardObjArray[p.boardObjArray.length - 1].score%></li></div>\n            <%\n        });%>\n        <div class=\"container\">\n            <div class=\"scores\">\n              <h2 id = \"errors\"><span>Score:</span> <span id=\"score\">0</span></h2>\n            </div>\n        </div>\n\n        <div id=\"grid\" class=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\">\n              <input id=\"input-0\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-1\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-2\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-9\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-10\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-11\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-18\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-19\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-20\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-1-0\">\n              <input id=\"input-3\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-4\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-5\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-12\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-13\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-14\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-21\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-22\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-23\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-2-0\">\n              <input id=\"input-6\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-7\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-8\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-15\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-16\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-17\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-24\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-25\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-26\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-0-1\">\n              <input id=\"input-27\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-28\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-29\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-36\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-37\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-38\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-45\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-46\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-47\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n            <div class=\"smallgrid\" id=\"grid-1-1\">\n              <input id=\"input-30\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-31\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-32\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-39\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-40\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-41\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-48\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-49\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-50\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-2-1\">\n              <input id=\"input-33\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-34\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-35\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-42\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-43\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-44\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-51\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-52\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-53\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              </div>\n            <div class=\"smallgrid\" id=\"grid-0-2\">\n              <input id=\"input-54\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-55\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-56\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-63\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-64\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-65\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-72\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-73\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-74\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n            <div class=\"smallgrid\" id=\"grid-1-2\">\n              <input id=\"input-57\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-58\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-59\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-66\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-67\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-68\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-75\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-76\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-77\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n            <div class=\"smallgrid\" id=\"grid-2-2\">\n              <input id=\"input-60\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-61\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-62\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-69\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-70\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-71\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-78\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-79\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-80\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n          </div>\n          <br>\n          <br>\n          <hr>\n          <br>\n          <form class=\"form-out\" method=\"GET\">\n              <button class=\"logout\" type=\"button\" onclick=\"leave(<%=playersLobby.id%>);\"><img src=\"/styles/img/exit.png\">Leave Lobby</button>\n          </form>\n        </main>\n  <% } %> \n    </section>\n  <%\n  if (playerIsInAnyLobby) {\n    %>\n        <div style=\"\n        width: 80%;\n        background:#28292d;\n        border-radius: 5px;\n\n        padding: 2em;\n        margin: 2em;\n\n        border: 1px #00FF89 solid;\n        \">\n            <h4>Lobby chat</h4>\n            <textarea style=\"\n            width: 100%;\n            font-size: 15px;\n            color: white;\n            height: 200px; \n            margin: 0;\n            padding: 0;\n            resize: vertical;\n            background-color: #28292d;\" readonly>\n            <% playersLobby.chat.forEach(c => {\n                %>\n                <%- c.player %>: <%- c.message %>\n                <%\n            });%>\n            </textarea>\n            <input type=\"text\" style=\"\n            position:relative;\n            width: 100%;\n            padding: 20px 10px 10px;\n            background: transparent;\n            border: none;\n            outline: none;\n            color: #23242a;\n            font-size: 1em;\n            letter-spacing: 0.05em;\n            border: 1px solid white;\n            color:white;\n            margin-top: 1em;\n            margin-bottom: 1em;\n            border: 1px solid #00FF89;\n            \" id=\"newchat\" placeholder=\"chat message\">\n            <button type=\"submit\" onclick=\"chat();\">Send Message</button>\n        </div>\n    \n    <%\n  }\n  %>\n\n  <script>\n        var slider = document.getElementById(\"size\");\n        var output = document.getElementById(\"value\");\n\n        var diffslider = document.getElementById(\"mpdiff\");\n        var diffoutput = document.getElementById(\"diff-value\");\n        \n        diffoutput.innerHTML = diffslider.value;\n        output.innerHTML = slider.value;\n  \n        slider.oninput = function(){\n          let value = this.value;\n          if (this.value == 2)\n            output.style.color = \"lightgreen\";\n            else if(this.value == 3)\n              output.style.color = \"yellow\";\n              else \n                output.style.color = \"red\";\n          output.innerHTML = value;\n          \n        }\n\n        diffslider.oninput = function(){\n          let value = this.value;\n          if (this.value == 1)\n          diffoutput.style.color = \"lightgreen\";\n            else if(this.value == 2)\n            diffoutput.style.color = \"yellow\";\n              else \n              diffoutput.style.color = \"red\";\n          diffoutput.innerHTML = value;\n          \n        }\n      </script>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ;  
      let playerIsInAnyLobby = false; 
      let playersLobby;
      let playerObj;
      lobbies.forEach( lobby => { 
        lobby.connected_players.forEach(p => {
                      if (p.player == userdata.username) {
                        playerIsInAnyLobby = true;
                        playerObj = p;
                        playersLobby = lobby;
                      }
                    });
      });

    ; __line = 14
    ; __append("\n<section class=\"main-section\">\n")
    ; __line = 16
    ;  
if (!playerIsInAnyLobby || (playerIsInAnyLobby && playersLobby.lobbyOpen))
{

    ; __line = 19
    ; __append("\n<link rel=\"stylesheet\"  href=\"/styles/css/middle.css\">\n<div class=\"boxes\">\n    <img src = \"/styles/img/player.png\">\n    <h1>Play solo</h1>\n    <p>Here you can practice to improve your sudoku solving skill.</p>\n    <br>\n    <p>Simply start a game of your chosen difficulty, and play away!</p>\n    <br>\n    <p>Single-player games are not timed, so don't stress. But remember that your moves are recorded, and wrong inputs are penalized. After each game, make sure to review your mistakes by checking your personal single-player games history.</p>\n\n    <br><hr><br>\n    <form method=\"POST\" action=\"/sudoku/solo_game\">\n      <label>Difficulty:</label>\n      <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\">\n      <br>\n      <button type=\"submit\"><img src=\"/styles/img/play.png\" >Play Solo</button>\n    </form>\n\n  </div>\n\n  <div class=\"boxes\">\n    <img src = \"/styles/img/high-score.png\">\n    <h1>High Scores</h1>\n    <p>Here you can see a complete history of your single-player and multi-player games, as well as the global highscores to compare your scores with the world!</p>\n    <br>\n    <p>If you can't find your scores on the global highscores list, dont worry! remember that practice makes perfect!</p>\n    <br><hr><br>\n    <form method=\"GET\">\n      <button type=\"submit\" formaction=\"/sudoku/high_scores/")
    ; __line = 48
    ; __append( userdata.username )
    ; __append("\"><img src=\"/styles/img/list.png\" >Your games history and highscores</button>\n      <br><br><hr><br>\n      <button type=\"submit\" formaction=\"/sudoku/global_high_scores/\"><img src=\"/styles/img/worldwide.png\" >Global games history and highscores</button>\n    </form>\n  </div>\n\n  <div class=\"boxes\">\n    <img src = \"/styles/img/team.png\">\n    <h1>Play with friends</h1>\n    <p>Join a game, or create a game to play with your friends!</p>\n    <br><hr><br>\n    <form class=\"\">\n      <input type=\"hidden\" value=\"create\" id=\"type\" name=\"create\">\n      <label>Difficulty: <span id=\"diff-value\"></span></label>\n      <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"mpdiff\" name=\"mpdiff\">\n      <label>Lobby Size: <span id=\"value\"></span></label>\n      <input type=\"range\" min=\"2\" max=\"4\" value=\"3\" id=\"size\" name=\"size\">\n      ")
    ; __line = 65
    ;  
      if (!playerIsInAnyLobby) {
        
    ; __line = 67
    ; __append(" \n        <button id=\"hostgame\" type=\"button\" onclick=\"host();\"><img src=\"/styles/img/people.png\" >Create lobby</button>\n        ")
    ; __line = 69
    ; 
      }
      
    ; __line = 71
    ; __append("\n      <br><br><hr><br>\n    </form>\n    ")
    ; __line = 74
    ; 
    lobbies.forEach( lobby => { 
      let playerIsInThisLobby = false; 
      
    ; __line = 77
    ; __append("\n      <div style=\"background-color: rgb(66, 66, 66); border-radius: 5px; margin: 10px; padding: 10px;\">\n        <h4>Lobby ID: ")
    ; __line = 79
    ; __append(escapeFn( lobby.id ))
    ; __append("</h4>\n                  <h4>Difficulty: ")
    ; __line = 80
    ; __append(escapeFn( lobby.lobbyDiff ))
    ; __append("</h4>\n                  <h4>Room Size: ")
    ; __line = 81
    ; __append(escapeFn( lobby.lobbySize ))
    ; __append("</h4>\n                  <h4> Players: </h4>\n                  ")
    ; __line = 83
    ;  
                  lobby.connected_players.forEach(p => {
                      if (p.player == userdata.username) {
                        playerIsInAnyLobby = true;
                        playerIsInThisLobby = true;
                      }
                      
    ; __line = 89
    ; __append("\n                      <div style=\"color: ")
    ; __line = 90
    ; __append(p.color)
    ; __append(";\"><li>")
    ; __append(p.player)
    ; __append("</li></div>\n                      \n                      ")
    ; __line = 92
    ; 
                  });
    ; __line = 93
    ; __append("\n        <div>\n          ")
    ; __line = 95
    ;  
          if (playerIsInThisLobby) {
            
    ; __line = 97
    ; __append(" \n              <button type=\"submit\" onclick=\"leave(")
    ; __line = 98
    ; __append(escapeFn(lobby.id))
    ; __append(");\">Leave</button>\n            ")
    ; __line = 99
    ; 
          }
          else if (!playerIsInAnyLobby){
            if (lobby.lobbyOpen)
                {
            
    ; __line = 104
    ; __append("\n              <button type=\"submit\" onclick=\"join(")
    ; __line = 105
    ; __append(escapeFn(lobby.id))
    ; __append(");\">Join</button>\n            ")
    ; __line = 106
    ; 
                }
                else {
                    
    ; __line = 109
    ; __append("\n                    <button type=\"submit\" disabled>GAME ALREADY IN PROGRESS</button>\n                    ")
    ; __line = 111
    ; 
                }
          }
          
          
    ; __line = 115
    ; __append("\n        </div>\n      </div>\n    ")
    ; __line = 118
    ;  }) 
    ; __append("\n  </div>\n  ")
    ; __line = 120
    ;  } else {
  
    ; __line = 121
    ; __append("\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n        <main>\n        <span id=\"gamemessage\">\n        <p>Currently playing a game of difficulty: <span id=\"level\">")
    ; __line = 125
    ; __append( playersLobby.lobbyDiff )
    ; __append("</span></p>\n        </span>\n        <p>Players:</p>\n        ")
    ; __line = 128
    ;  
          playersLobby.connected_players.forEach(p => {
            
    ; __line = 130
    ; __append("\n            <div style=\"color: ")
    ; __line = 131
    ; __append(p.color)
    ; __append(";\"><li>")
    ; __append(p.player)
    ; __append(", score:")
    ; __append(p.boardObjArray[p.boardObjArray.length - 1].score)
    ; __append("</li></div>\n            ")
    ; __line = 132
    ; 
        });
    ; __line = 133
    ; __append("\n        <div class=\"container\">\n            <div class=\"scores\">\n              <h2 id = \"errors\"><span>Score:</span> <span id=\"score\">0</span></h2>\n            </div>\n        </div>\n\n        <div id=\"grid\" class=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\">\n              <input id=\"input-0\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-1\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-2\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-9\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-10\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-11\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-18\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-19\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-20\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-1-0\">\n              <input id=\"input-3\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-4\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-5\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-12\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-13\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-14\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-21\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-22\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-23\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-2-0\">\n              <input id=\"input-6\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-7\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-8\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-15\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-16\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-17\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-24\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-25\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-26\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-0-1\">\n              <input id=\"input-27\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-28\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-29\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-36\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-37\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-38\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-45\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-46\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-47\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n            <div class=\"smallgrid\" id=\"grid-1-1\">\n              <input id=\"input-30\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-31\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-32\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-39\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-40\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-41\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-48\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-49\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-50\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-2-1\">\n              <input id=\"input-33\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-34\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-35\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-42\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-43\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-44\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-51\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-52\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-53\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              </div>\n            <div class=\"smallgrid\" id=\"grid-0-2\">\n              <input id=\"input-54\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-55\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-56\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-63\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-64\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-65\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-72\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-73\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-74\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n            <div class=\"smallgrid\" id=\"grid-1-2\">\n              <input id=\"input-57\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-58\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-59\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-66\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-67\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-68\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-75\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-76\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-77\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n            <div class=\"smallgrid\" id=\"grid-2-2\">\n              <input id=\"input-60\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-61\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-62\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-69\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-70\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-71\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-78\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-79\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-80\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n          </div>\n          <br>\n          <br>\n          <hr>\n          <br>\n          <form class=\"form-out\" method=\"GET\">\n              <button class=\"logout\" type=\"button\" onclick=\"leave(")
    ; __line = 246
    ; __append(escapeFn(playersLobby.id))
    ; __append(");\"><img src=\"/styles/img/exit.png\">Leave Lobby</button>\n          </form>\n        </main>\n  ")
    ; __line = 249
    ;  } 
    ; __append(" \n    </section>\n  ")
    ; __line = 251
    ; 
  if (playerIsInAnyLobby) {
    
    ; __line = 253
    ; __append("\n        <div style=\"\n        width: 80%;\n        background:#28292d;\n        border-radius: 5px;\n\n        padding: 2em;\n        margin: 2em;\n\n        border: 1px #00FF89 solid;\n        \">\n            <h4>Lobby chat</h4>\n            <textarea style=\"\n            width: 100%;\n            font-size: 15px;\n            color: white;\n            height: 200px; \n            margin: 0;\n            padding: 0;\n            resize: vertical;\n            background-color: #28292d;\" readonly>\n            ")
    ; __line = 274
    ;  playersLobby.chat.forEach(c => {
                
    ; __line = 275
    ; __append("\n                ")
    ; __line = 276
    ; __append( c.player )
    ; __append(": ")
    ; __append( c.message )
    ; __append("\n                ")
    ; __line = 277
    ; 
            });
    ; __line = 278
    ; __append("\n            </textarea>\n            <input type=\"text\" style=\"\n            position:relative;\n            width: 100%;\n            padding: 20px 10px 10px;\n            background: transparent;\n            border: none;\n            outline: none;\n            color: #23242a;\n            font-size: 1em;\n            letter-spacing: 0.05em;\n            border: 1px solid white;\n            color:white;\n            margin-top: 1em;\n            margin-bottom: 1em;\n            border: 1px solid #00FF89;\n            \" id=\"newchat\" placeholder=\"chat message\">\n            <button type=\"submit\" onclick=\"chat();\">Send Message</button>\n        </div>\n    \n    ")
    ; __line = 299
    ; 
  }
  
    ; __line = 301
    ; __append("\n\n  <script>\n        var slider = document.getElementById(\"size\");\n        var output = document.getElementById(\"value\");\n\n        var diffslider = document.getElementById(\"mpdiff\");\n        var diffoutput = document.getElementById(\"diff-value\");\n        \n        diffoutput.innerHTML = diffslider.value;\n        output.innerHTML = slider.value;\n  \n        slider.oninput = function(){\n          let value = this.value;\n          if (this.value == 2)\n            output.style.color = \"lightgreen\";\n            else if(this.value == 3)\n              output.style.color = \"yellow\";\n              else \n                output.style.color = \"red\";\n          output.innerHTML = value;\n          \n        }\n\n        diffslider.oninput = function(){\n          let value = this.value;\n          if (this.value == 1)\n          diffoutput.style.color = \"lightgreen\";\n            else if(this.value == 2)\n            diffoutput.style.color = \"yellow\";\n              else \n              diffoutput.style.color = \"red\";\n          diffoutput.innerHTML = value;\n          \n        }\n      </script>")
    ; __line = 336
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_multimiddle = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "60,37,45,32,74,83,79,108,111,98,98,105,101,115,32,37,62"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("60,37,45,32,74,83,79,108,111,98,98,105,101,115,32,37,62")
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
  , __lines = "<!--\n    Web Atelier 2022\n\n    Home Page\n\n    Author: __Belotcaci Valentino__\n\n    Exported to ejs: Hoormazd Pirayeshfar\n\n-->\n<html>\n    <%- include(\"includes/head\") %>\n    <head>\n      <link rel=\"stylesheet\"  href=\"/styles/css/home.css\">\n    </head>\n    <body>\n      <%- include(\"includes/header\") %>\n      <section class=\"main-section\">\n        <%- include(\"includes/login\") %>\n      </section>\n      <%- include(\"includes/footer\") %>\n    </body>\n</html>"
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
    ; __append("\n      <section class=\"main-section\">\n        ")
    ; __line = 19
    ; __append( include("includes/login") )
    ; __append("\n      </section>\n      ")
    ; __line = 21
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n</html>")
    ; __line = 23
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
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n        <link rel=\"icon\" href=\"icons/joystick.png\" type=\"image/icon type\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    </head>\n\n    <body>\n      <%- include(\"includes/header\") %>\n      <%- message %>\n      <form action=\"/sudoku/log_out\" method=\"get\">\n      <button class=\"logout\" type=\"submit\"><img src=\"/styles/img/exit.png\" >Log-out</button>\n      </form>\n      <div class=\"lobcont\" style=\"\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\">\n      <%- include(\"includes/mainsection\") %>\n      </div>\n\n      <%- include(\"includes/footer\") %>\n\n      <script src=\"/socket.io/socket.io.js\"></script>\n      <script src = \"/client_scripts/api-client.js\"></script>\n      <script class=\"std\" src=\"./js/ejs.min.js\"></script>\n      <script class=\"std\" src=\"./js/views.js\"></script>\n\n      <script src=\"/client_scripts/client_socket.js\"></script>\n\n      <input type=\"hidden\" id=\"username-holder\" value=\"<%- userdata.username %>\">\n    </body>\n</html>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n    ")
    ; __line = 2
    ; __append( include("includes/head") )
    ; __append("\n    <head>\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n        <link rel=\"icon\" href=\"icons/joystick.png\" type=\"image/icon type\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    </head>\n\n    <body>\n      ")
    ; __line = 10
    ; __append( include("includes/header") )
    ; __append("\n      ")
    ; __line = 11
    ; __append( message )
    ; __append("\n      <form action=\"/sudoku/log_out\" method=\"get\">\n      <button class=\"logout\" type=\"submit\"><img src=\"/styles/img/exit.png\" >Log-out</button>\n      </form>\n      <div class=\"lobcont\" style=\"\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\">\n      ")
    ; __line = 21
    ; __append( include("includes/mainsection") )
    ; __append("\n      </div>\n\n      ")
    ; __line = 24
    ; __append( include("includes/footer") )
    ; __append("\n\n      <script src=\"/socket.io/socket.io.js\"></script>\n      <script src = \"/client_scripts/api-client.js\"></script>\n      <script class=\"std\" src=\"./js/ejs.min.js\"></script>\n      <script class=\"std\" src=\"./js/views.js\"></script>\n\n      <script src=\"/client_scripts/client_socket.js\"></script>\n\n      <input type=\"hidden\" id=\"username-holder\" value=\"")
    ; __line = 33
    ; __append( userdata.username )
    ; __append("\">\n    </body>\n</html>\n")
    ; __line = 36
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
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n    </head>\n    <body>\n      <%- include(\"includes/header\") %>\n      \n\n      <section class=\"main-section\">\n\n       \n        <main>\n          <h1>Sudoku</h1>\n          <hr>\n          <h3><span id=\"msg\"><%- locals.message %></span> <%- locals.username %>!</h3>\n          <p>Currently playing a game of difficulty: <span id=\"level\"><%- locals.diff %></span></p>\n          <h2 id = \"errors\">Score: <span id=\"score\"><%- locals.score %></span>\n          <span id=\"minutes\"> 00 </span>\n          <span id=\"seconds\"> 00 </span>\n          <span id=\"miliseconds\"> 000 </span>\n          </h2>\n\n          <div id=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-2\"></div>\n          </div>\n          <form class=\"form\" method=\"POST\">\n              <input type=\"hidden\" value=\"<%- locals.username %>\" id=\"username\" name=\"username\">\n              <input type=\"hidden\" value=\"<%- locals.password %>\" id=\"password\" name=\"password\">\n              <button class=\"logout\" type=\"submit\" formaction=\"/sudoku/solo_game\"><img src=\"/styles/img/exit.png\" >Back to menu</button>\n              <label>Difficulty</label>\n              <input type=\"range\" min=\"1\" max=\"3\" value=\"<%- locals.diff %>\" id=\"diff\" name=\"diff\">\n              <button type=\"submit\" id=\"startTimer\" ><img src=\"/styles/img/refresh.png\">New Game</button>\n            <!-- onclick=\"startTimer()\" -->\n            </div>\n          </form>\n        </main>\n\n       \n      </section>\n      <%- include(\"includes/footer\") %>\n      <script src = \"/client_scripts/multiplayer.js\"></script>\n\n    </body>\n\n   \n</html>"
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
    ; __append("\n      \n\n      <section class=\"main-section\">\n\n       \n        <main>\n          <h1>Sudoku</h1>\n          <hr>\n          <h3><span id=\"msg\">")
    ; __line = 16
    ; __append( locals.message )
    ; __append("</span> ")
    ; __append( locals.username )
    ; __append("!</h3>\n          <p>Currently playing a game of difficulty: <span id=\"level\">")
    ; __line = 17
    ; __append( locals.diff )
    ; __append("</span></p>\n          <h2 id = \"errors\">Score: <span id=\"score\">")
    ; __line = 18
    ; __append( locals.score )
    ; __append("</span>\n          <span id=\"minutes\"> 00 </span>\n          <span id=\"seconds\"> 00 </span>\n          <span id=\"miliseconds\"> 000 </span>\n          </h2>\n\n          <div id=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-2\"></div>\n          </div>\n          <form class=\"form\" method=\"POST\">\n              <input type=\"hidden\" value=\"")
    ; __line = 36
    ; __append( locals.username )
    ; __append("\" id=\"username\" name=\"username\">\n              <input type=\"hidden\" value=\"")
    ; __line = 37
    ; __append( locals.password )
    ; __append("\" id=\"password\" name=\"password\">\n              <button class=\"logout\" type=\"submit\" formaction=\"/sudoku/solo_game\"><img src=\"/styles/img/exit.png\" >Back to menu</button>\n              <label>Difficulty</label>\n              <input type=\"range\" min=\"1\" max=\"3\" value=\"")
    ; __line = 40
    ; __append( locals.diff )
    ; __append("\" id=\"diff\" name=\"diff\">\n              <button type=\"submit\" id=\"startTimer\" ><img src=\"/styles/img/refresh.png\">New Game</button>\n            <!-- onclick=\"startTimer()\" -->\n            </div>\n          </form>\n        </main>\n\n       \n      </section>\n      ")
    ; __line = 49
    ; __append( include("includes/footer") )
    ; __append("\n      <script src = \"/client_scripts/multiplayer.js\"></script>\n\n    </body>\n\n   \n</html>")
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
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n    </head>\n    <body onload=\"startTimer()\">\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n\n       \n        <main>\n          <h1>Sudoku</h1>\n          <hr>\n          <h3><span id=\"msg\"><%- message %></span> <span id=\"username\"><%- pagedata.username %></span>!</h3>\n          <p>Currently playing a game of difficulty: <span id=\"level\"><%- pagedata.diff %></span></p>\n          <div class=\"container\">\n            <div class=\"time\">\n              <span>Time: </span>\n              <span id=\"seconds\"> 00 </span>s\n          </div>\n            <div class=\"scores\">\n              <h2 id = \"errors\"><span>Score:</span> <span id=\"score\">0</span></h2>\n            </div>\n        </div>\n\n          <div id=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-2\"></div>\n          </div>\n          <form class=\"form\" method=\"POST\">\n          <div class=\"info\">\n              <button type=\"button\" onclick=\"showHint();\"><img src=\"/styles/img/lamp.png\">Show Hint!</button>\n              <br>\n              \n              <label>Difficulty</label>\n              <br>\n              <input type=\"range\" min=\"1\" max=\"3\" value=\"<%- pagedata.diff %>\" id=\"diff\" name=\"diff\">\n              <button type=\"submit\" id=\"startTimer\" formaction=\"/sudoku/solo_game\"><img src=\"/styles/img/refresh.png\">New Game</button>\n            \n          </form>\n          <form class=\"form-out\" method=\"GET\">\n              <button type=\"submit\" formaction=\"/sudoku/high_scores/<%-pagedata.username%>\"><img src=\"/styles/img/list.png\" >Your games</button>\n              <button class=\"logout\" type=\"submit\" formaction=\"/sudoku\"><img src=\"/styles/img/exit.png\">Back to menu</button>\n          </form>\n            \n        </main>\n       \n      </section>\n      <%- include(\"includes/footer\") %>\n    </body> \n\n    <script src = \"/client_scripts/api-client.js\"></script>\n    <script src = \"/game/sudoku-solver.js\"></script>\n</html>"
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
    ; __append("</span> <span id=\"username\">")
    ; __append( pagedata.username )
    ; __append("</span>!</h3>\n          <p>Currently playing a game of difficulty: <span id=\"level\">")
    ; __line = 16
    ; __append( pagedata.diff )
    ; __append("</span></p>\n          <div class=\"container\">\n            <div class=\"time\">\n              <span>Time: </span>\n              <span id=\"seconds\"> 00 </span>s\n          </div>\n            <div class=\"scores\">\n              <h2 id = \"errors\"><span>Score:</span> <span id=\"score\">0</span></h2>\n            </div>\n        </div>\n\n          <div id=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-2\"></div>\n          </div>\n          <form class=\"form\" method=\"POST\">\n          <div class=\"info\">\n              <button type=\"button\" onclick=\"showHint();\"><img src=\"/styles/img/lamp.png\">Show Hint!</button>\n              <br>\n              \n              <label>Difficulty</label>\n              <br>\n              <input type=\"range\" min=\"1\" max=\"3\" value=\"")
    ; __line = 45
    ; __append( pagedata.diff )
    ; __append("\" id=\"diff\" name=\"diff\">\n              <button type=\"submit\" id=\"startTimer\" formaction=\"/sudoku/solo_game\"><img src=\"/styles/img/refresh.png\">New Game</button>\n            \n          </form>\n          <form class=\"form-out\" method=\"GET\">\n              <button type=\"submit\" formaction=\"/sudoku/high_scores/")
    ; __line = 50
    ; __append(pagedata.username)
    ; __append("\"><img src=\"/styles/img/list.png\" >Your games</button>\n              <button class=\"logout\" type=\"submit\" formaction=\"/sudoku\"><img src=\"/styles/img/exit.png\">Back to menu</button>\n          </form>\n            \n        </main>\n       \n      </section>\n      ")
    ; __line = 57
    ; __append( include("includes/footer") )
    ; __append("\n    </body> \n\n    <script src = \"/client_scripts/api-client.js\"></script>\n    <script src = \"/game/sudoku-solver.js\"></script>\n</html>")
    ; __line = 62
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
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n        <script src = \"/sudoku.js\"></script>\n    </head>\n    <body>\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n        <main>\n            <h1>Sudoku</h1>\n            <hr>\n            <h3><%#- message %> <%#- pagedata.username %></h3>\n            <p>Currently playing a game of <%#- pagedata.diff %> difficulty</p>\n            <h2 id = \"errors\">Score: <%#- pagedata.score %></h2>\n\n            <!-- 9X9 board -->\n            <div id=\"grid\">\n            </div>\n            \n            <!-- \n            <div id = \"board\"></div>\n            \n            <div id=\"digits\"></div>\n            <br> -->\n        </main>\n      </section>\n      <%- include(\"includes/footer\") %>\n    </body>\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"/client_scripts/client_socket.js\"></script>\n</html>"
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
    ; __append(" ")
    ; __append("</h3>\n            <p>Currently playing a game of ")
    ; __line = 15
    ; __append(" difficulty</p>\n            <h2 id = \"errors\">Score: ")
    ; __line = 16
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
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n        <script src=\"/js/ejs.min.js\"></script>\n        <script src=\"/js/views.js\"></script>\n        <script src=\"/socket.io/socket.io.js\"></script>\n        <script src=\"/client_scripts/client_socket.js\"></script>\n    </head>\n    <body onload=\"socket_init()\">\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n        \n        <main>\n            <h1>Sudoku</h1>\n            <hr>\n            \n                    <h4>Connection Successful</h4></li>\n                        <br>\n                        <h2>Lobby ID: <%= lobby.id %></h2>\n                        <h4>Difficulty: <%= lobby.lobbyDiff %></h4>\n                        <h4>Room Size: <%= lobby.lobbySize %></h4>\n                        <br>\n                        <h4 id=\"players_ready\"></h4>\n                        <h2> Players: </h2>\n                        <% lobby.connected_players.forEach(p => {\n                            %>\n                            <li><%-p.player%></li>\n                            <%\n                        });%>\n                        <h4 id=\"players_ready\"></h4>\n\n            </main>\n        </section>\n      <%- include(\"includes/footer\") %>\n    </body>\n\n</html>"
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
    ; __append("\n\n      <section class=\"main-section\">\n        \n        <main>\n            <h1>Sudoku</h1>\n            <hr>\n            \n                    <h4>Connection Successful</h4></li>\n                        <br>\n                        <h2>Lobby ID: ")
    ; __line = 21
    ; __append(escapeFn( lobby.id ))
    ; __append("</h2>\n                        <h4>Difficulty: ")
    ; __line = 22
    ; __append(escapeFn( lobby.lobbyDiff ))
    ; __append("</h4>\n                        <h4>Room Size: ")
    ; __line = 23
    ; __append(escapeFn( lobby.lobbySize ))
    ; __append("</h4>\n                        <br>\n                        <h4 id=\"players_ready\"></h4>\n                        <h2> Players: </h2>\n                        ")
    ; __line = 27
    ;  lobby.connected_players.forEach(p => {
                            
    ; __line = 28
    ; __append("\n                            <li>")
    ; __line = 29
    ; __append(p.player)
    ; __append("</li>\n                            ")
    ; __line = 30
    ; 
                        });
    ; __line = 31
    ; __append("\n                        <h4 id=\"players_ready\"></h4>\n\n            </main>\n        </section>\n      ")
    ; __line = 36
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n\n</html>")
    ; __line = 39
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
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
  , __lines = "<html>\n  <%- include(\"includes/head\") %>\n  <head>\n      <link rel=\"stylesheet\"  href=\"/styles/css/high_scores.css\">\n      <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n      <link rel=\"icon\" href=\"icons/joystick.png\" type=\"image/icon type\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  </head>\n\n    <body>\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n        <div class=\"head\">\n          <h1>Singleplayer highscores and game history</h1>\n          <form method=\"GET\" action=\"/sudoku\">\n            <button class=\"logout\" type=\"submit\"><img src=\"/styles/img/exit.png\">Back to menu</button>\n          </form>\n        </div>\n        <% \n          var rank = 1;\n          if (high_scores.length == 0) {\n            %> \n            <h3>You need to finish at least one game to see anything here!</h3>\n            <%\n          }\n          high_scores.forEach(high_score => {\n          if (high_score.game == \"solo\") {\n          %>\n          <form method=\"GET\" action=\"/sudoku/high_scores\">\n            <ul>\n              <li>\n                <div>Player: <%= high_score.username%></div>\n                <div>Game mode: <%= high_score.game%></div>\n                <div>Date played: <%= high_score.dateplayed%></div>\n                <div>Rank: <span><%-rank++%></span><img src=\"/styles/img/award.png\"></div>\n              </li>\n              <li>\n                <div>Total moves: <%= high_score.totalMoves%></div>\n                <div class=\"score\">Score: <%= high_score.score%></div>\n                <div>Hints used: <%= high_score.boardObjHistory[high_score.totalMoves - 1].hintIndexes.length%></div>\n              </li>\n              <li>\n                <div id=\"grid\" class=\"grid-<%= high_score._id%>\">\n                  <div class=\"smallgrid\" id=\"grid-0-0\">\n                    <input id=\"<%= high_score._id%>-input-0\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-1\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-2\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-9\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-10\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-11\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-18\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-19\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-20\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-0\">\n                    <input id=\"<%= high_score._id%>-input-3\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-4\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-5\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-12\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-13\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-14\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-21\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-22\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-23\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-0\">\n                    <input id=\"<%= high_score._id%>-input-6\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-7\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-8\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-15\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-16\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-17\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-24\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-25\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-26\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-0-1\">\n                    <input id=\"<%= high_score._id%>-input-27\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= high_score._id%>-input-28\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-29\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-36\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-37\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-38\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-45\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-46\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-47\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-1\">\n                    <input id=\"<%= high_score._id%>-input-30\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= high_score._id%>-input-31\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-32\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-39\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-40\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-41\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-48\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-49\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-50\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-1\">\n                    <input id=\"<%= high_score._id%>-input-33\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= high_score._id%>-input-34\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-35\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-42\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-43\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-44\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-51\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-52\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-53\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    </div>\n                  <div class=\"smallgrid\" id=\"grid-0-2\">\n                    <input id=\"<%= high_score._id%>-input-54\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= high_score._id%>-input-55\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-56\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-63\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-64\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-65\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-72\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-73\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-74\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-2\">\n                    <input id=\"<%= high_score._id%>-input-57\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-58\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-59\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-66\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-67\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-68\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-75\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-76\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-77\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-2\">\n                    <input id=\"<%= high_score._id%>-input-60\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-61\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-62\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-69\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-70\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-71\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-78\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= high_score._id%>-input-79\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= high_score._id%>-input-80\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div>\n                  <span>Track time: <span id=\"time-<%= high_score._id%>\"></span></span>\n                </div>\n                <div>\n                  <span class=\"slider\">Track moves: <span id=\"value-<%= high_score._id%>\"></span><input class=\"tracker-<%= high_score._id%>\" type=\"range\" id=\"moves\" min=\"0\" max=\"<%=high_score.totalMoves - 1%>\" value=\"<%= high_score.totalMoves - 1%>\"></span>\n                </div>\n                <div>\n                  <span>Track score: <span id=\"score-<%= high_score._id%>\"></span></span>\n                </div>\n              </li>\n            </ul>\n          </form>\n          <script>\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n\n            function prephs<%= high_score._id %>() {\n\n              var currentval = document.querySelector(\".tracker-<%= high_score._id%>\").value;\n              var hs = <%-JSON.stringify(high_score)%>;\n\n              var movecount = document.getElementById(\"value-<%= high_score._id%>\").innerHTML = +currentval + 1;\n              var scorecount = document.getElementById(\"score-<%= high_score._id%>\").innerHTML = hs.boardObjHistory[currentval].score;\n              var timecount = document.getElementById(\"time-<%= high_score._id%>\").innerHTML = hs.boardObjHistory[currentval].time;\n\n              for (let i = 0; i < 81; i++) {\n                //get cell\n                var cell = document.getElementById(\"<%= high_score._id%>-input-\"+i);\n\n                //set numbers\n                cell.value = hs.boardObjHistory[currentval].fullboard[i];\n\n                cell.disabled = true;\n\n                //remove extra classes\n                cell.classList.remove(\"wrong-cell\");\n                cell.classList.remove(\"correct-cell\");\n                cell.classList.remove(\"hint-cell\");\n                cell.classList.remove(\"givennumber\");\n\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].correctIndexes.length ; i++) {\n                document.getElementById(\"<%= high_score._id%>-input-\"+hs.boardObjHistory[currentval].correctIndexes[i]).classList.add(\"correct-cell\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].wrongIndexes.length ; i++) {\n                document.getElementById(\"<%= high_score._id%>-input-\"+hs.boardObjHistory[currentval].wrongIndexes[i]).classList.add(\"wrong-cell\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].givenNumberIndexes.length ; i++) {\n                document.getElementById(\"<%= high_score._id%>-input-\"+hs.boardObjHistory[currentval].givenNumberIndexes[i]).classList.add(\"givennumber\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].hintIndexes.length ; i++) {\n                document.getElementById(\"<%= high_score._id%>-input-\"+hs.boardObjHistory[currentval].hintIndexes[i]).classList.add(\"hint-cell\");\n              }\n            }\n\n            document.querySelector(\".tracker-<%= high_score._id%>\").addEventListener('input', () => {\n              prephs<%= high_score._id %>();\n            });\n\n            prephs<%= high_score._id %>();\n          </script>\n          <%\n          }\n        }); %>\n\n      </section>\n      <hr>\n      <section class=\"main-section\">\n        <h1>Multiplayer - history</h1>\n        <% \n          let rel = false;\n          multi_high_scores.forEach(mhs => {\n            %>\n            <form method=\"GET\" action=\"/sudoku/high_scores\">\n            <ul>\n              <li>\n                <div>Game mode: Multiplayer</div>\n                <div>Date played: <%= mhs.dateplayed%></div>\n              </li>\n              <li>\n                Players:\n              </li>\n              <li>\n                    <% mhs.connected_players.forEach(p => {\n                      %>\n                      <div style=\"color: <%-p.color%>;\"><%-p.player%></div>\n                      <%\n                    });%>\n              </li>\n              <li>\n                <% mhs.connected_players.forEach(p => {\n                      %>\n                \n                <div id=\"grid\" class=\"grid-<%= mhs._id%>-<%= p.player%>\">\n                  <div class=\"smallgrid\" id=\"grid-0-0\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-0\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-1\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-2\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-9\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-10\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-11\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-18\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-19\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-20\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-0\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-3\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-4\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-5\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-12\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-13\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-14\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-21\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-22\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-23\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-0\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-6\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-7\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-8\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-15\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-16\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-17\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-24\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-25\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-26\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-0-1\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-27\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-28\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-29\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-36\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-37\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-38\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-45\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-46\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-47\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-1\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-30\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-31\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-32\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-39\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-40\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-41\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-48\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-49\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-50\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-1\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-33\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-34\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-35\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-42\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-43\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-44\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-51\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-52\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-53\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    </div>\n                  <div class=\"smallgrid\" id=\"grid-0-2\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-54\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-55\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-56\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-63\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-64\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-65\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-72\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-73\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-74\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-2\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-57\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-58\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-59\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-66\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-67\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-68\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-75\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-76\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-77\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-2\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-60\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-61\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-62\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-69\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-70\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-71\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-78\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-79\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"<%= mhs._id%>-<%= p.player%>-input-80\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                </div>\n                \n                <%\n                    });%>\n              </li>\n              <li>\n                <div>\n                  <span class=\"slider\">Track moves: <span id=\"value-<%= mhs._id%>\"></span><input class=\"tracker-<%= mhs._id%>\" type=\"range\" id=\"moves\" min=\"0\" max=\"\" value=\"\"></span>\n                </div>\n              </li>\n              <script>\n                function prepremhs<%-mhs._id%>() {\n                  var mhss = <%-JSON.stringify(mhs)%>;\n                  var maxmoves = 0;\n                  mhss.connected_players.forEach(p => {\n                    if (p.boardObjArray.length > maxmoves) maxmoves = p.boardObjArray.length;\n                  });\n                  prepmhs<%-mhs._id%>(maxmoves);\n\n                  let slider = document.querySelector('input.tracker-<%= mhs._id%>');\n                  slider.max = maxmoves;\n                  slider.value = maxmoves;\n                  slider.addEventListener('input', (event) => {\n                    prepmhs<%-mhs._id%>(event.target.value);\n                  });\n\n                }\n                function prepmhs<%-mhs._id%>(n) {\n                  var mhss = <%-JSON.stringify(mhs)%>;\n                  mhss.connected_players.forEach(p => {\n                    if (n > p.boardObjArray.length) n = p.boardObjArray.length;\n                    for (let i = 0; i < 81; i++) {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.value =  p.boardObjArray[n - 1].fullboard[i];\n                      if (cell.value == 0) cell.value = '';\n                      cell.className = \"\"\n                    }\n                    p.boardObjArray[n - 1].givenNumberIndexes.forEach(i => {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.classList.add(\"givennumber\");\n                    });\n                    p.boardObjArray[n - 1].correctIndexes.forEach(i => {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.classList.add(\"correct-cell\");\n                    });\n                    p.boardObjArray[n - 1].wrongIndexes.forEach(i => {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.classList.add(\"wrong-cell\");\n                    });\n                  });\n\n                  \n\n\n                }\n                prepremhs<%-mhs._id%>();\n              </script>\n            </ul>\n          </form>\n            <%\n        }); %>\n      </section>\n\n      <%- include(\"includes/footer\") %>\n    </body>\n</html>\n"
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
    ; __append("\n\n      <section class=\"main-section\">\n        <div class=\"head\">\n          <h1>Singleplayer highscores and game history</h1>\n          <form method=\"GET\" action=\"/sudoku\">\n            <button class=\"logout\" type=\"submit\"><img src=\"/styles/img/exit.png\">Back to menu</button>\n          </form>\n        </div>\n        ")
    ; __line = 20
    ;  
          var rank = 1;
          if (high_scores.length == 0) {
            
    ; __line = 23
    ; __append(" \n            <h3>You need to finish at least one game to see anything here!</h3>\n            ")
    ; __line = 25
    ; 
          }
          high_scores.forEach(high_score => {
          if (high_score.game == "solo") {
          
    ; __line = 29
    ; __append("\n          <form method=\"GET\" action=\"/sudoku/high_scores\">\n            <ul>\n              <li>\n                <div>Player: ")
    ; __line = 33
    ; __append(escapeFn( high_score.username))
    ; __append("</div>\n                <div>Game mode: ")
    ; __line = 34
    ; __append(escapeFn( high_score.game))
    ; __append("</div>\n                <div>Date played: ")
    ; __line = 35
    ; __append(escapeFn( high_score.dateplayed))
    ; __append("</div>\n                <div>Rank: <span>")
    ; __line = 36
    ; __append(rank++)
    ; __append("</span><img src=\"/styles/img/award.png\"></div>\n              </li>\n              <li>\n                <div>Total moves: ")
    ; __line = 39
    ; __append(escapeFn( high_score.totalMoves))
    ; __append("</div>\n                <div class=\"score\">Score: ")
    ; __line = 40
    ; __append(escapeFn( high_score.score))
    ; __append("</div>\n                <div>Hints used: ")
    ; __line = 41
    ; __append(escapeFn( high_score.boardObjHistory[high_score.totalMoves - 1].hintIndexes.length))
    ; __append("</div>\n              </li>\n              <li>\n                <div id=\"grid\" class=\"grid-")
    ; __line = 44
    ; __append(escapeFn( high_score._id))
    ; __append("\">\n                  <div class=\"smallgrid\" id=\"grid-0-0\">\n                    <input id=\"")
    ; __line = 46
    ; __append(escapeFn( high_score._id))
    ; __append("-input-0\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 47
    ; __append(escapeFn( high_score._id))
    ; __append("-input-1\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 48
    ; __append(escapeFn( high_score._id))
    ; __append("-input-2\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 49
    ; __append(escapeFn( high_score._id))
    ; __append("-input-9\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 50
    ; __append(escapeFn( high_score._id))
    ; __append("-input-10\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 51
    ; __append(escapeFn( high_score._id))
    ; __append("-input-11\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 52
    ; __append(escapeFn( high_score._id))
    ; __append("-input-18\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 53
    ; __append(escapeFn( high_score._id))
    ; __append("-input-19\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 54
    ; __append(escapeFn( high_score._id))
    ; __append("-input-20\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-0\">\n                    <input id=\"")
    ; __line = 57
    ; __append(escapeFn( high_score._id))
    ; __append("-input-3\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 58
    ; __append(escapeFn( high_score._id))
    ; __append("-input-4\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 59
    ; __append(escapeFn( high_score._id))
    ; __append("-input-5\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 60
    ; __append(escapeFn( high_score._id))
    ; __append("-input-12\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 61
    ; __append(escapeFn( high_score._id))
    ; __append("-input-13\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 62
    ; __append(escapeFn( high_score._id))
    ; __append("-input-14\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 63
    ; __append(escapeFn( high_score._id))
    ; __append("-input-21\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 64
    ; __append(escapeFn( high_score._id))
    ; __append("-input-22\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 65
    ; __append(escapeFn( high_score._id))
    ; __append("-input-23\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-0\">\n                    <input id=\"")
    ; __line = 68
    ; __append(escapeFn( high_score._id))
    ; __append("-input-6\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 69
    ; __append(escapeFn( high_score._id))
    ; __append("-input-7\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 70
    ; __append(escapeFn( high_score._id))
    ; __append("-input-8\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 71
    ; __append(escapeFn( high_score._id))
    ; __append("-input-15\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 72
    ; __append(escapeFn( high_score._id))
    ; __append("-input-16\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 73
    ; __append(escapeFn( high_score._id))
    ; __append("-input-17\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 74
    ; __append(escapeFn( high_score._id))
    ; __append("-input-24\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 75
    ; __append(escapeFn( high_score._id))
    ; __append("-input-25\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 76
    ; __append(escapeFn( high_score._id))
    ; __append("-input-26\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-0-1\">\n                    <input id=\"")
    ; __line = 79
    ; __append(escapeFn( high_score._id))
    ; __append("-input-27\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 80
    ; __append(escapeFn( high_score._id))
    ; __append("-input-28\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 81
    ; __append(escapeFn( high_score._id))
    ; __append("-input-29\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 82
    ; __append(escapeFn( high_score._id))
    ; __append("-input-36\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 83
    ; __append(escapeFn( high_score._id))
    ; __append("-input-37\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 84
    ; __append(escapeFn( high_score._id))
    ; __append("-input-38\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 85
    ; __append(escapeFn( high_score._id))
    ; __append("-input-45\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 86
    ; __append(escapeFn( high_score._id))
    ; __append("-input-46\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 87
    ; __append(escapeFn( high_score._id))
    ; __append("-input-47\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-1\">\n                    <input id=\"")
    ; __line = 90
    ; __append(escapeFn( high_score._id))
    ; __append("-input-30\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 91
    ; __append(escapeFn( high_score._id))
    ; __append("-input-31\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 92
    ; __append(escapeFn( high_score._id))
    ; __append("-input-32\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 93
    ; __append(escapeFn( high_score._id))
    ; __append("-input-39\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 94
    ; __append(escapeFn( high_score._id))
    ; __append("-input-40\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 95
    ; __append(escapeFn( high_score._id))
    ; __append("-input-41\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 96
    ; __append(escapeFn( high_score._id))
    ; __append("-input-48\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 97
    ; __append(escapeFn( high_score._id))
    ; __append("-input-49\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 98
    ; __append(escapeFn( high_score._id))
    ; __append("-input-50\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-1\">\n                    <input id=\"")
    ; __line = 101
    ; __append(escapeFn( high_score._id))
    ; __append("-input-33\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 102
    ; __append(escapeFn( high_score._id))
    ; __append("-input-34\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 103
    ; __append(escapeFn( high_score._id))
    ; __append("-input-35\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 104
    ; __append(escapeFn( high_score._id))
    ; __append("-input-42\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 105
    ; __append(escapeFn( high_score._id))
    ; __append("-input-43\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 106
    ; __append(escapeFn( high_score._id))
    ; __append("-input-44\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 107
    ; __append(escapeFn( high_score._id))
    ; __append("-input-51\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 108
    ; __append(escapeFn( high_score._id))
    ; __append("-input-52\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 109
    ; __append(escapeFn( high_score._id))
    ; __append("-input-53\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    </div>\n                  <div class=\"smallgrid\" id=\"grid-0-2\">\n                    <input id=\"")
    ; __line = 112
    ; __append(escapeFn( high_score._id))
    ; __append("-input-54\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 113
    ; __append(escapeFn( high_score._id))
    ; __append("-input-55\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 114
    ; __append(escapeFn( high_score._id))
    ; __append("-input-56\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 115
    ; __append(escapeFn( high_score._id))
    ; __append("-input-63\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 116
    ; __append(escapeFn( high_score._id))
    ; __append("-input-64\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 117
    ; __append(escapeFn( high_score._id))
    ; __append("-input-65\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 118
    ; __append(escapeFn( high_score._id))
    ; __append("-input-72\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 119
    ; __append(escapeFn( high_score._id))
    ; __append("-input-73\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 120
    ; __append(escapeFn( high_score._id))
    ; __append("-input-74\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-2\">\n                    <input id=\"")
    ; __line = 123
    ; __append(escapeFn( high_score._id))
    ; __append("-input-57\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 124
    ; __append(escapeFn( high_score._id))
    ; __append("-input-58\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 125
    ; __append(escapeFn( high_score._id))
    ; __append("-input-59\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 126
    ; __append(escapeFn( high_score._id))
    ; __append("-input-66\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 127
    ; __append(escapeFn( high_score._id))
    ; __append("-input-67\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 128
    ; __append(escapeFn( high_score._id))
    ; __append("-input-68\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 129
    ; __append(escapeFn( high_score._id))
    ; __append("-input-75\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 130
    ; __append(escapeFn( high_score._id))
    ; __append("-input-76\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 131
    ; __append(escapeFn( high_score._id))
    ; __append("-input-77\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-2\">\n                    <input id=\"")
    ; __line = 134
    ; __append(escapeFn( high_score._id))
    ; __append("-input-60\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 135
    ; __append(escapeFn( high_score._id))
    ; __append("-input-61\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 136
    ; __append(escapeFn( high_score._id))
    ; __append("-input-62\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 137
    ; __append(escapeFn( high_score._id))
    ; __append("-input-69\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 138
    ; __append(escapeFn( high_score._id))
    ; __append("-input-70\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 139
    ; __append(escapeFn( high_score._id))
    ; __append("-input-71\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 140
    ; __append(escapeFn( high_score._id))
    ; __append("-input-78\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 141
    ; __append(escapeFn( high_score._id))
    ; __append("-input-79\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 142
    ; __append(escapeFn( high_score._id))
    ; __append("-input-80\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div>\n                  <span>Track time: <span id=\"time-")
    ; __line = 148
    ; __append(escapeFn( high_score._id))
    ; __append("\"></span></span>\n                </div>\n                <div>\n                  <span class=\"slider\">Track moves: <span id=\"value-")
    ; __line = 151
    ; __append(escapeFn( high_score._id))
    ; __append("\"></span><input class=\"tracker-")
    ; __append(escapeFn( high_score._id))
    ; __append("\" type=\"range\" id=\"moves\" min=\"0\" max=\"")
    ; __append(escapeFn(high_score.totalMoves - 1))
    ; __append("\" value=\"")
    ; __append(escapeFn( high_score.totalMoves - 1))
    ; __append("\"></span>\n                </div>\n                <div>\n                  <span>Track score: <span id=\"score-")
    ; __line = 154
    ; __append(escapeFn( high_score._id))
    ; __append("\"></span></span>\n                </div>\n              </li>\n            </ul>\n          </form>\n          <script>\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n            //PLEASE DONT MODIFY THIS FILE\n\n            function prephs")
    ; __line = 166
    ; __append(escapeFn( high_score._id ))
    ; __append("() {\n\n              var currentval = document.querySelector(\".tracker-")
    ; __line = 168
    ; __append(escapeFn( high_score._id))
    ; __append("\").value;\n              var hs = ")
    ; __line = 169
    ; __append(JSON.stringify(high_score))
    ; __append(";\n\n              var movecount = document.getElementById(\"value-")
    ; __line = 171
    ; __append(escapeFn( high_score._id))
    ; __append("\").innerHTML = +currentval + 1;\n              var scorecount = document.getElementById(\"score-")
    ; __line = 172
    ; __append(escapeFn( high_score._id))
    ; __append("\").innerHTML = hs.boardObjHistory[currentval].score;\n              var timecount = document.getElementById(\"time-")
    ; __line = 173
    ; __append(escapeFn( high_score._id))
    ; __append("\").innerHTML = hs.boardObjHistory[currentval].time;\n\n              for (let i = 0; i < 81; i++) {\n                //get cell\n                var cell = document.getElementById(\"")
    ; __line = 177
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+i);\n\n                //set numbers\n                cell.value = hs.boardObjHistory[currentval].fullboard[i];\n\n                cell.disabled = true;\n\n                //remove extra classes\n                cell.classList.remove(\"wrong-cell\");\n                cell.classList.remove(\"correct-cell\");\n                cell.classList.remove(\"hint-cell\");\n                cell.classList.remove(\"givennumber\");\n\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].correctIndexes.length ; i++) {\n                document.getElementById(\"")
    ; __line = 192
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+hs.boardObjHistory[currentval].correctIndexes[i]).classList.add(\"correct-cell\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].wrongIndexes.length ; i++) {\n                document.getElementById(\"")
    ; __line = 195
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+hs.boardObjHistory[currentval].wrongIndexes[i]).classList.add(\"wrong-cell\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].givenNumberIndexes.length ; i++) {\n                document.getElementById(\"")
    ; __line = 198
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+hs.boardObjHistory[currentval].givenNumberIndexes[i]).classList.add(\"givennumber\");\n              }\n              for (let i = 0; i < hs.boardObjHistory[currentval].hintIndexes.length ; i++) {\n                document.getElementById(\"")
    ; __line = 201
    ; __append(escapeFn( high_score._id))
    ; __append("-input-\"+hs.boardObjHistory[currentval].hintIndexes[i]).classList.add(\"hint-cell\");\n              }\n            }\n\n            document.querySelector(\".tracker-")
    ; __line = 205
    ; __append(escapeFn( high_score._id))
    ; __append("\").addEventListener('input', () => {\n              prephs")
    ; __line = 206
    ; __append(escapeFn( high_score._id ))
    ; __append("();\n            });\n\n            prephs")
    ; __line = 209
    ; __append(escapeFn( high_score._id ))
    ; __append("();\n          </script>\n          ")
    ; __line = 211
    ; 
          }
        }); 
    ; __line = 213
    ; __append("\n\n      </section>\n      <hr>\n      <section class=\"main-section\">\n        <h1>Multiplayer - history</h1>\n        ")
    ; __line = 219
    ;  
          let rel = false;
          multi_high_scores.forEach(mhs => {
            
    ; __line = 222
    ; __append("\n            <form method=\"GET\" action=\"/sudoku/high_scores\">\n            <ul>\n              <li>\n                <div>Game mode: Multiplayer</div>\n                <div>Date played: ")
    ; __line = 227
    ; __append(escapeFn( mhs.dateplayed))
    ; __append("</div>\n              </li>\n              <li>\n                Players:\n              </li>\n              <li>\n                    ")
    ; __line = 233
    ;  mhs.connected_players.forEach(p => {
                      
    ; __line = 234
    ; __append("\n                      <div style=\"color: ")
    ; __line = 235
    ; __append(p.color)
    ; __append(";\">")
    ; __append(p.player)
    ; __append("</div>\n                      ")
    ; __line = 236
    ; 
                    });
    ; __line = 237
    ; __append("\n              </li>\n              <li>\n                ")
    ; __line = 240
    ;  mhs.connected_players.forEach(p => {
                      
    ; __line = 241
    ; __append("\n                \n                <div id=\"grid\" class=\"grid-")
    ; __line = 243
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("\">\n                  <div class=\"smallgrid\" id=\"grid-0-0\">\n                    <input id=\"")
    ; __line = 245
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-0\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 246
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-1\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 247
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-2\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 248
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-9\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 249
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-10\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 250
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-11\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 251
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-18\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 252
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-19\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 253
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-20\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-0\">\n                    <input id=\"")
    ; __line = 256
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-3\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 257
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-4\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 258
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-5\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 259
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-12\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 260
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-13\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 261
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-14\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 262
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-21\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 263
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-22\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 264
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-23\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-0\">\n                    <input id=\"")
    ; __line = 267
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-6\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 268
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-7\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 269
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-8\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 270
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-15\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 271
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-16\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 272
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-17\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 273
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-24\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 274
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-25\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 275
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-26\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-0-1\">\n                    <input id=\"")
    ; __line = 278
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-27\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 279
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-28\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 280
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-29\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 281
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-36\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 282
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-37\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 283
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-38\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 284
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-45\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 285
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-46\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 286
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-47\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-1\">\n                    <input id=\"")
    ; __line = 289
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-30\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 290
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-31\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 291
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-32\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 292
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-39\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 293
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-40\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 294
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-41\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 295
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-48\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 296
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-49\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 297
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-50\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-1\">\n                    <input id=\"")
    ; __line = 300
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-33\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 301
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-34\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 302
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-35\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 303
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-42\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 304
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-43\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 305
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-44\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 306
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-51\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 307
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-52\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 308
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-53\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    </div>\n                  <div class=\"smallgrid\" id=\"grid-0-2\">\n                    <input id=\"")
    ; __line = 311
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-54\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n                    <input id=\"")
    ; __line = 312
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-55\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 313
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-56\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 314
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-63\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 315
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-64\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 316
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-65\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 317
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-72\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 318
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-73\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 319
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-74\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-1-2\">\n                    <input id=\"")
    ; __line = 322
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-57\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 323
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-58\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 324
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-59\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 325
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-66\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 326
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-67\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 327
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-68\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 328
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-75\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 329
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-76\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 330
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-77\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                  <div class=\"smallgrid\" id=\"grid-2-2\">\n                    <input id=\"")
    ; __line = 333
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-60\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 334
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-61\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 335
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-62\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 336
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-69\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 337
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-70\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 338
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-71\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 339
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-78\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                    <input id=\"")
    ; __line = 340
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-79\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n                    <input id=\"")
    ; __line = 341
    ; __append(escapeFn( mhs._id))
    ; __append("-")
    ; __append(escapeFn( p.player))
    ; __append("-input-80\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n                  </div>\n                </div>\n                \n                ")
    ; __line = 345
    ; 
                    });
    ; __line = 346
    ; __append("\n              </li>\n              <li>\n                <div>\n                  <span class=\"slider\">Track moves: <span id=\"value-")
    ; __line = 350
    ; __append(escapeFn( mhs._id))
    ; __append("\"></span><input class=\"tracker-")
    ; __append(escapeFn( mhs._id))
    ; __append("\" type=\"range\" id=\"moves\" min=\"0\" max=\"\" value=\"\"></span>\n                </div>\n              </li>\n              <script>\n                function prepremhs")
    ; __line = 354
    ; __append(mhs._id)
    ; __append("() {\n                  var mhss = ")
    ; __line = 355
    ; __append(JSON.stringify(mhs))
    ; __append(";\n                  var maxmoves = 0;\n                  mhss.connected_players.forEach(p => {\n                    if (p.boardObjArray.length > maxmoves) maxmoves = p.boardObjArray.length;\n                  });\n                  prepmhs")
    ; __line = 360
    ; __append(mhs._id)
    ; __append("(maxmoves);\n\n                  let slider = document.querySelector('input.tracker-")
    ; __line = 362
    ; __append(escapeFn( mhs._id))
    ; __append("');\n                  slider.max = maxmoves;\n                  slider.value = maxmoves;\n                  slider.addEventListener('input', (event) => {\n                    prepmhs")
    ; __line = 366
    ; __append(mhs._id)
    ; __append("(event.target.value);\n                  });\n\n                }\n                function prepmhs")
    ; __line = 370
    ; __append(mhs._id)
    ; __append("(n) {\n                  var mhss = ")
    ; __line = 371
    ; __append(JSON.stringify(mhs))
    ; __append(";\n                  mhss.connected_players.forEach(p => {\n                    if (n > p.boardObjArray.length) n = p.boardObjArray.length;\n                    for (let i = 0; i < 81; i++) {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.value =  p.boardObjArray[n - 1].fullboard[i];\n                      if (cell.value == 0) cell.value = '';\n                      cell.className = \"\"\n                    }\n                    p.boardObjArray[n - 1].givenNumberIndexes.forEach(i => {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.classList.add(\"givennumber\");\n                    });\n                    p.boardObjArray[n - 1].correctIndexes.forEach(i => {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.classList.add(\"correct-cell\");\n                    });\n                    p.boardObjArray[n - 1].wrongIndexes.forEach(i => {\n                      let cell = document.getElementById(mhss._id+\"-\"+p.player+\"-input-\"+i);\n                      cell.classList.add(\"wrong-cell\");\n                    });\n                  });\n\n                  \n\n\n                }\n                prepremhs")
    ; __line = 398
    ; __append(mhs._id)
    ; __append("();\n              </script>\n            </ul>\n          </form>\n            ")
    ; __line = 402
    ; 
        }); 
    ; __line = 403
    ; __append("\n      </section>\n\n      ")
    ; __line = 406
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n</html>\n")
    ; __line = 409
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
  , __lines = "<main class = \"main-home\">\n  <p>Welcome to sudoku online, please login and play!</p>\n    <div class=\"box\">\n      <form class=\"form\" method=\"POST\" action=\"/sudoku\">\n        <h3><%- msg %></h3>\n        <div class=\"inputBox\">\n          <label>Username</label>\n          <input type=\"text\" required = \"required\" id=\"username\" name=\"username\">\n          <br>\n          <label>Password</label>\n          <input type=\"password\" required = \"required\" id=\"password\" name=\"password\">\n          <br>\n          <!-- <label>Difficulty</label>\n          <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\"> -->\n          <br>\n          <button type=\"submit\"><img src=\"/styles/img/enter.png\">Login</button>\n          <!-- <button type=\"submit\" formaction=\"/sudoku/solo_game\">Play Solo</button> -->\n        </div>\n      </form>\n\n    </div>\n</main>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<main class = \"main-home\">\n  <p>Welcome to sudoku online, please login and play!</p>\n    <div class=\"box\">\n      <form class=\"form\" method=\"POST\" action=\"/sudoku\">\n        <h3>")
    ; __line = 5
    ; __append( msg )
    ; __append("</h3>\n        <div class=\"inputBox\">\n          <label>Username</label>\n          <input type=\"text\" required = \"required\" id=\"username\" name=\"username\">\n          <br>\n          <label>Password</label>\n          <input type=\"password\" required = \"required\" id=\"password\" name=\"password\">\n          <br>\n          <!-- <label>Difficulty</label>\n          <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\"> -->\n          <br>\n          <button type=\"submit\"><img src=\"/styles/img/enter.png\">Login</button>\n          <!-- <button type=\"submit\" formaction=\"/sudoku/solo_game\">Play Solo</button> -->\n        </div>\n      </form>\n\n    </div>\n</main>")
    ; __line = 22
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_mainsection = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<% \n      let playerIsInAnyLobby = false; \n      let playersLobby;\n      let playerObj;\n      lobbies.forEach( lobby => { \n        lobby.connected_players.forEach(p => {\n                      if (p.player == userdata.username) {\n                        playerIsInAnyLobby = true;\n                        playerObj = p;\n                        playersLobby = lobby;\n                      }\n                    });\n      });\n%>\n<section class=\"main-section\">\n<% \nif (!playerIsInAnyLobby || (playerIsInAnyLobby && playersLobby.lobbyOpen))\n{\n%>\n<link rel=\"stylesheet\"  href=\"/styles/css/middle.css\">\n<div class=\"boxes\">\n    <img src = \"/styles/img/player.png\">\n    <h1>Play solo</h1>\n    <p>Here you can practice to improve your sudoku solving skill.</p>\n    <br>\n    <p>Simply start a game of your chosen difficulty, and play away!</p>\n    <br>\n    <p>Single-player games are not timed, so don't stress. But remember that your moves are recorded, and wrong inputs are penalized. After each game, make sure to review your mistakes by checking your personal single-player games history.</p>\n\n    <br><hr><br>\n    <form method=\"POST\" action=\"/sudoku/solo_game\">\n      <label>Difficulty:</label>\n      <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\">\n      <br>\n      <button type=\"submit\"><img src=\"/styles/img/play.png\" >Play Solo</button>\n    </form>\n\n  </div>\n\n  <div class=\"boxes\">\n    <img src = \"/styles/img/high-score.png\">\n    <h1>High Scores</h1>\n    <p>Here you can see a complete history of your single-player and multi-player games, as well as the global highscores to compare your scores with the world!</p>\n    <br>\n    <p>If you can't find your scores on the global highscores list, dont worry! remember that practice makes perfect!</p>\n    <br><hr><br>\n    <form method=\"GET\">\n      <button type=\"submit\" formaction=\"/sudoku/high_scores/<%- userdata.username %>\"><img src=\"/styles/img/list.png\" >Your games history and highscores</button>\n      <br><br><hr><br>\n      <button type=\"submit\" formaction=\"/sudoku/global_high_scores/\"><img src=\"/styles/img/worldwide.png\" >Global games history and highscores</button>\n    </form>\n  </div>\n\n  <div class=\"boxes\">\n    <img src = \"/styles/img/team.png\">\n    <h1>Play with friends</h1>\n    <p>Join a game, or create a game to play with your friends!</p>\n    <br><hr><br>\n    <form class=\"\">\n      <input type=\"hidden\" value=\"create\" id=\"type\" name=\"create\">\n      <label>Difficulty: <span id=\"diff-value\"></span></label>\n      <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"mpdiff\" name=\"mpdiff\">\n      <label>Lobby Size: <span id=\"value\"></span></label>\n      <input type=\"range\" min=\"2\" max=\"4\" value=\"3\" id=\"size\" name=\"size\">\n      <% \n      if (!playerIsInAnyLobby) {\n        %> \n        <button id=\"hostgame\" type=\"button\" onclick=\"host();\"><img src=\"/styles/img/people.png\" >Create lobby</button>\n        <%\n      }\n      %>\n      <br><br><hr><br>\n    </form>\n    <%\n    lobbies.forEach( lobby => { \n      let playerIsInThisLobby = false; \n      %>\n      <div style=\"background-color: rgb(66, 66, 66); border-radius: 5px; margin: 10px; padding: 10px;\">\n        <h4>Lobby ID: <%= lobby.id %></h4>\n                  <h4>Difficulty: <%= lobby.lobbyDiff %></h4>\n                  <h4>Room Size: <%= lobby.lobbySize %></h4>\n                  <h4> Players: </h4>\n                  <% \n                  lobby.connected_players.forEach(p => {\n                      if (p.player == userdata.username) {\n                        playerIsInAnyLobby = true;\n                        playerIsInThisLobby = true;\n                      }\n                      %>\n                      <div style=\"color: <%-p.color%>;\"><li><%-p.player%></li></div>\n                      \n                      <%\n                  });%>\n        <div>\n          <% \n          if (playerIsInThisLobby) {\n            %> \n              <button type=\"submit\" onclick=\"leave(<%=lobby.id%>);\">Leave</button>\n            <%\n          }\n          else if (!playerIsInAnyLobby){\n            if (lobby.lobbyOpen)\n                {\n            %>\n              <button type=\"submit\" onclick=\"join(<%=lobby.id%>);\">Join</button>\n            <%\n                }\n                else {\n                    %>\n                    <button type=\"submit\" disabled>GAME ALREADY IN PROGRESS</button>\n                    <%\n                }\n          }\n          \n          %>\n        </div>\n      </div>\n    <% }) %>\n  </div>\n  <% } else {\n  %>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n        <main>\n        <span id=\"gamemessage\">\n        <p>Currently playing a game of difficulty: <span id=\"level\"><%- playersLobby.lobbyDiff %></span></p>\n        </span>\n        <p>Players:</p>\n        <% \n          playersLobby.connected_players.forEach(p => {\n            %>\n            <div style=\"color: <%-p.color%>;\"><li><%-p.player%>, score:<%-p.boardObjArray[p.boardObjArray.length - 1].score%></li></div>\n            <%\n        });%>\n        <div class=\"container\">\n            <div class=\"scores\">\n              <h2 id = \"errors\"><span>Score:</span> <span id=\"score\">0</span></h2>\n            </div>\n        </div>\n\n        <div id=\"grid\" class=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\">\n              <input id=\"input-0\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-1\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-2\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-9\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-10\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-11\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-18\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-19\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-20\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-1-0\">\n              <input id=\"input-3\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-4\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-5\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-12\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-13\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-14\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-21\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-22\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-23\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-2-0\">\n              <input id=\"input-6\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-7\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-8\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-15\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-16\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-17\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-24\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-25\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-26\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-0-1\">\n              <input id=\"input-27\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-28\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-29\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-36\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-37\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-38\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-45\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-46\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-47\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n            <div class=\"smallgrid\" id=\"grid-1-1\">\n              <input id=\"input-30\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-31\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-32\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-39\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-40\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-41\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-48\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-49\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-50\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-2-1\">\n              <input id=\"input-33\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-34\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-35\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-42\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-43\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-44\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-51\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-52\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-53\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              </div>\n            <div class=\"smallgrid\" id=\"grid-0-2\">\n              <input id=\"input-54\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-55\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-56\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-63\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-64\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-65\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-72\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-73\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-74\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n            <div class=\"smallgrid\" id=\"grid-1-2\">\n              <input id=\"input-57\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-58\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-59\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-66\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-67\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-68\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-75\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-76\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-77\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n            <div class=\"smallgrid\" id=\"grid-2-2\">\n              <input id=\"input-60\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-61\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-62\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-69\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-70\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-71\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-78\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-79\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-80\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n          </div>\n          <br>\n          <br>\n          <hr>\n          <br>\n          <form class=\"form-out\" method=\"GET\">\n              <button class=\"logout\" type=\"button\" onclick=\"leave(<%=playersLobby.id%>);\"><img src=\"/styles/img/exit.png\">Leave Lobby</button>\n          </form>\n        </main>\n  <% } %> \n    </section>\n  <%\n  if (playerIsInAnyLobby) {\n    %>\n        <div style=\"\n        width: 80%;\n        background:#28292d;\n        border-radius: 5px;\n\n        padding: 2em;\n        margin: 2em;\n\n        border: 1px #00FF89 solid;\n        \">\n            <h4>Lobby chat</h4>\n            <textarea style=\"\n            width: 100%;\n            font-size: 15px;\n            color: white;\n            height: 200px; \n            margin: 0;\n            padding: 0;\n            resize: vertical;\n            background-color: #28292d;\" readonly>\n            <% playersLobby.chat.forEach(c => {\n                %>\n                <%- c.player %>: <%- c.message %>\n                <%\n            });%>\n            </textarea>\n            <input type=\"text\" style=\"\n            position:relative;\n            width: 100%;\n            padding: 20px 10px 10px;\n            background: transparent;\n            border: none;\n            outline: none;\n            color: #23242a;\n            font-size: 1em;\n            letter-spacing: 0.05em;\n            border: 1px solid white;\n            color:white;\n            margin-top: 1em;\n            margin-bottom: 1em;\n            border: 1px solid #00FF89;\n            \" id=\"newchat\" placeholder=\"chat message\">\n            <button type=\"submit\" onclick=\"chat();\">Send Message</button>\n        </div>\n    \n    <%\n  }\n  %>\n\n  <script>\n        var slider = document.getElementById(\"size\");\n        var output = document.getElementById(\"value\");\n\n        var diffslider = document.getElementById(\"mpdiff\");\n        var diffoutput = document.getElementById(\"diff-value\");\n        \n        diffoutput.innerHTML = diffslider.value;\n        output.innerHTML = slider.value;\n  \n        slider.oninput = function(){\n          let value = this.value;\n          if (this.value == 2)\n            output.style.color = \"lightgreen\";\n            else if(this.value == 3)\n              output.style.color = \"yellow\";\n              else \n                output.style.color = \"red\";\n          output.innerHTML = value;\n          \n        }\n\n        diffslider.oninput = function(){\n          let value = this.value;\n          if (this.value == 1)\n          diffoutput.style.color = \"lightgreen\";\n            else if(this.value == 2)\n            diffoutput.style.color = \"yellow\";\n              else \n              diffoutput.style.color = \"red\";\n          diffoutput.innerHTML = value;\n          \n        }\n      </script>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ;  
      let playerIsInAnyLobby = false; 
      let playersLobby;
      let playerObj;
      lobbies.forEach( lobby => { 
        lobby.connected_players.forEach(p => {
                      if (p.player == userdata.username) {
                        playerIsInAnyLobby = true;
                        playerObj = p;
                        playersLobby = lobby;
                      }
                    });
      });

    ; __line = 14
    ; __append("\n<section class=\"main-section\">\n")
    ; __line = 16
    ;  
if (!playerIsInAnyLobby || (playerIsInAnyLobby && playersLobby.lobbyOpen))
{

    ; __line = 19
    ; __append("\n<link rel=\"stylesheet\"  href=\"/styles/css/middle.css\">\n<div class=\"boxes\">\n    <img src = \"/styles/img/player.png\">\n    <h1>Play solo</h1>\n    <p>Here you can practice to improve your sudoku solving skill.</p>\n    <br>\n    <p>Simply start a game of your chosen difficulty, and play away!</p>\n    <br>\n    <p>Single-player games are not timed, so don't stress. But remember that your moves are recorded, and wrong inputs are penalized. After each game, make sure to review your mistakes by checking your personal single-player games history.</p>\n\n    <br><hr><br>\n    <form method=\"POST\" action=\"/sudoku/solo_game\">\n      <label>Difficulty:</label>\n      <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"diff\" name=\"diff\">\n      <br>\n      <button type=\"submit\"><img src=\"/styles/img/play.png\" >Play Solo</button>\n    </form>\n\n  </div>\n\n  <div class=\"boxes\">\n    <img src = \"/styles/img/high-score.png\">\n    <h1>High Scores</h1>\n    <p>Here you can see a complete history of your single-player and multi-player games, as well as the global highscores to compare your scores with the world!</p>\n    <br>\n    <p>If you can't find your scores on the global highscores list, dont worry! remember that practice makes perfect!</p>\n    <br><hr><br>\n    <form method=\"GET\">\n      <button type=\"submit\" formaction=\"/sudoku/high_scores/")
    ; __line = 48
    ; __append( userdata.username )
    ; __append("\"><img src=\"/styles/img/list.png\" >Your games history and highscores</button>\n      <br><br><hr><br>\n      <button type=\"submit\" formaction=\"/sudoku/global_high_scores/\"><img src=\"/styles/img/worldwide.png\" >Global games history and highscores</button>\n    </form>\n  </div>\n\n  <div class=\"boxes\">\n    <img src = \"/styles/img/team.png\">\n    <h1>Play with friends</h1>\n    <p>Join a game, or create a game to play with your friends!</p>\n    <br><hr><br>\n    <form class=\"\">\n      <input type=\"hidden\" value=\"create\" id=\"type\" name=\"create\">\n      <label>Difficulty: <span id=\"diff-value\"></span></label>\n      <input type=\"range\" min=\"1\" max=\"3\" value=\"2\" id=\"mpdiff\" name=\"mpdiff\">\n      <label>Lobby Size: <span id=\"value\"></span></label>\n      <input type=\"range\" min=\"2\" max=\"4\" value=\"3\" id=\"size\" name=\"size\">\n      ")
    ; __line = 65
    ;  
      if (!playerIsInAnyLobby) {
        
    ; __line = 67
    ; __append(" \n        <button id=\"hostgame\" type=\"button\" onclick=\"host();\"><img src=\"/styles/img/people.png\" >Create lobby</button>\n        ")
    ; __line = 69
    ; 
      }
      
    ; __line = 71
    ; __append("\n      <br><br><hr><br>\n    </form>\n    ")
    ; __line = 74
    ; 
    lobbies.forEach( lobby => { 
      let playerIsInThisLobby = false; 
      
    ; __line = 77
    ; __append("\n      <div style=\"background-color: rgb(66, 66, 66); border-radius: 5px; margin: 10px; padding: 10px;\">\n        <h4>Lobby ID: ")
    ; __line = 79
    ; __append(escapeFn( lobby.id ))
    ; __append("</h4>\n                  <h4>Difficulty: ")
    ; __line = 80
    ; __append(escapeFn( lobby.lobbyDiff ))
    ; __append("</h4>\n                  <h4>Room Size: ")
    ; __line = 81
    ; __append(escapeFn( lobby.lobbySize ))
    ; __append("</h4>\n                  <h4> Players: </h4>\n                  ")
    ; __line = 83
    ;  
                  lobby.connected_players.forEach(p => {
                      if (p.player == userdata.username) {
                        playerIsInAnyLobby = true;
                        playerIsInThisLobby = true;
                      }
                      
    ; __line = 89
    ; __append("\n                      <div style=\"color: ")
    ; __line = 90
    ; __append(p.color)
    ; __append(";\"><li>")
    ; __append(p.player)
    ; __append("</li></div>\n                      \n                      ")
    ; __line = 92
    ; 
                  });
    ; __line = 93
    ; __append("\n        <div>\n          ")
    ; __line = 95
    ;  
          if (playerIsInThisLobby) {
            
    ; __line = 97
    ; __append(" \n              <button type=\"submit\" onclick=\"leave(")
    ; __line = 98
    ; __append(escapeFn(lobby.id))
    ; __append(");\">Leave</button>\n            ")
    ; __line = 99
    ; 
          }
          else if (!playerIsInAnyLobby){
            if (lobby.lobbyOpen)
                {
            
    ; __line = 104
    ; __append("\n              <button type=\"submit\" onclick=\"join(")
    ; __line = 105
    ; __append(escapeFn(lobby.id))
    ; __append(");\">Join</button>\n            ")
    ; __line = 106
    ; 
                }
                else {
                    
    ; __line = 109
    ; __append("\n                    <button type=\"submit\" disabled>GAME ALREADY IN PROGRESS</button>\n                    ")
    ; __line = 111
    ; 
                }
          }
          
          
    ; __line = 115
    ; __append("\n        </div>\n      </div>\n    ")
    ; __line = 118
    ;  }) 
    ; __append("\n  </div>\n  ")
    ; __line = 120
    ;  } else {
  
    ; __line = 121
    ; __append("\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n        <main>\n        <span id=\"gamemessage\">\n        <p>Currently playing a game of difficulty: <span id=\"level\">")
    ; __line = 125
    ; __append( playersLobby.lobbyDiff )
    ; __append("</span></p>\n        </span>\n        <p>Players:</p>\n        ")
    ; __line = 128
    ;  
          playersLobby.connected_players.forEach(p => {
            
    ; __line = 130
    ; __append("\n            <div style=\"color: ")
    ; __line = 131
    ; __append(p.color)
    ; __append(";\"><li>")
    ; __append(p.player)
    ; __append(", score:")
    ; __append(p.boardObjArray[p.boardObjArray.length - 1].score)
    ; __append("</li></div>\n            ")
    ; __line = 132
    ; 
        });
    ; __line = 133
    ; __append("\n        <div class=\"container\">\n            <div class=\"scores\">\n              <h2 id = \"errors\"><span>Score:</span> <span id=\"score\">0</span></h2>\n            </div>\n        </div>\n\n        <div id=\"grid\" class=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\">\n              <input id=\"input-0\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-1\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-2\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-9\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-10\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-11\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-18\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-19\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-20\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-1-0\">\n              <input id=\"input-3\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-4\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-5\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-12\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-13\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-14\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-21\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-22\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-23\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-2-0\">\n              <input id=\"input-6\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-7\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-8\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-15\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-16\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-17\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-24\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-25\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-26\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-0-1\">\n              <input id=\"input-27\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-28\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-29\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-36\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-37\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-38\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-45\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-46\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-47\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n            <div class=\"smallgrid\" id=\"grid-1-1\">\n              <input id=\"input-30\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-31\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-32\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-39\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-40\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-41\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-48\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-49\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-50\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n            </div>\n            <div class=\"smallgrid\" id=\"grid-2-1\">\n              <input id=\"input-33\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-34\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-35\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-42\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-43\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-44\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-51\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-52\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-53\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              </div>\n            <div class=\"smallgrid\" id=\"grid-0-2\">\n              <input id=\"input-54\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\" >\n              <input id=\"input-55\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-56\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-63\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-64\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-65\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-72\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-73\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-74\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n            <div class=\"smallgrid\" id=\"grid-1-2\">\n              <input id=\"input-57\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-58\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-59\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-66\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-67\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-68\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-75\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-76\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-77\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n            <div class=\"smallgrid\" id=\"grid-2-2\">\n              <input id=\"input-60\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-61\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-62\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-69\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-70\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-71\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-78\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n              <input id=\"input-79\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input\">\n              <input id=\"input-80\" type=\"number\" min=\"1\" max=\"9\" maxlength=\"1\" class=\"sudoku-input \" >\n            </div>\n          </div>\n          <br>\n          <br>\n          <hr>\n          <br>\n          <form class=\"form-out\" method=\"GET\">\n              <button class=\"logout\" type=\"button\" onclick=\"leave(")
    ; __line = 246
    ; __append(escapeFn(playersLobby.id))
    ; __append(");\"><img src=\"/styles/img/exit.png\">Leave Lobby</button>\n          </form>\n        </main>\n  ")
    ; __line = 249
    ;  } 
    ; __append(" \n    </section>\n  ")
    ; __line = 251
    ; 
  if (playerIsInAnyLobby) {
    
    ; __line = 253
    ; __append("\n        <div style=\"\n        width: 80%;\n        background:#28292d;\n        border-radius: 5px;\n\n        padding: 2em;\n        margin: 2em;\n\n        border: 1px #00FF89 solid;\n        \">\n            <h4>Lobby chat</h4>\n            <textarea style=\"\n            width: 100%;\n            font-size: 15px;\n            color: white;\n            height: 200px; \n            margin: 0;\n            padding: 0;\n            resize: vertical;\n            background-color: #28292d;\" readonly>\n            ")
    ; __line = 274
    ;  playersLobby.chat.forEach(c => {
                
    ; __line = 275
    ; __append("\n                ")
    ; __line = 276
    ; __append( c.player )
    ; __append(": ")
    ; __append( c.message )
    ; __append("\n                ")
    ; __line = 277
    ; 
            });
    ; __line = 278
    ; __append("\n            </textarea>\n            <input type=\"text\" style=\"\n            position:relative;\n            width: 100%;\n            padding: 20px 10px 10px;\n            background: transparent;\n            border: none;\n            outline: none;\n            color: #23242a;\n            font-size: 1em;\n            letter-spacing: 0.05em;\n            border: 1px solid white;\n            color:white;\n            margin-top: 1em;\n            margin-bottom: 1em;\n            border: 1px solid #00FF89;\n            \" id=\"newchat\" placeholder=\"chat message\">\n            <button type=\"submit\" onclick=\"chat();\">Send Message</button>\n        </div>\n    \n    ")
    ; __line = 299
    ; 
  }
  
    ; __line = 301
    ; __append("\n\n  <script>\n        var slider = document.getElementById(\"size\");\n        var output = document.getElementById(\"value\");\n\n        var diffslider = document.getElementById(\"mpdiff\");\n        var diffoutput = document.getElementById(\"diff-value\");\n        \n        diffoutput.innerHTML = diffslider.value;\n        output.innerHTML = slider.value;\n  \n        slider.oninput = function(){\n          let value = this.value;\n          if (this.value == 2)\n            output.style.color = \"lightgreen\";\n            else if(this.value == 3)\n              output.style.color = \"yellow\";\n              else \n                output.style.color = \"red\";\n          output.innerHTML = value;\n          \n        }\n\n        diffslider.oninput = function(){\n          let value = this.value;\n          if (this.value == 1)\n          diffoutput.style.color = \"lightgreen\";\n            else if(this.value == 2)\n            diffoutput.style.color = \"yellow\";\n              else \n              diffoutput.style.color = \"red\";\n          diffoutput.innerHTML = value;\n          \n        }\n      </script>")
    ; __line = 336
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_multimiddle = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "60,37,45,32,74,83,79,108,111,98,98,105,101,115,32,37,62"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("60,37,45,32,74,83,79,108,111,98,98,105,101,115,32,37,62")
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
  , __lines = "<!--\n    Web Atelier 2022\n\n    Home Page\n\n    Author: __Belotcaci Valentino__\n\n    Exported to ejs: Hoormazd Pirayeshfar\n\n-->\n<html>\n    <%- include(\"includes/head\") %>\n    <head>\n      <link rel=\"stylesheet\"  href=\"/styles/css/home.css\">\n    </head>\n    <body>\n      <%- include(\"includes/header\") %>\n      <section class=\"main-section\">\n        <%- include(\"includes/login\") %>\n      </section>\n      <%- include(\"includes/footer\") %>\n    </body>\n</html>"
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
    ; __append("\n      <section class=\"main-section\">\n        ")
    ; __line = 19
    ; __append( include("includes/login") )
    ; __append("\n      </section>\n      ")
    ; __line = 21
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n</html>")
    ; __line = 23
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
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n        <link rel=\"icon\" href=\"icons/joystick.png\" type=\"image/icon type\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    </head>\n\n    <body>\n      <%- include(\"includes/header\") %>\n      <%- message %>\n      <form action=\"/sudoku/log_out\" method=\"get\">\n      <button class=\"logout\" type=\"submit\"><img src=\"/styles/img/exit.png\" >Log-out</button>\n      </form>\n      <div class=\"lobcont\" style=\"\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\">\n      <%- include(\"includes/mainsection\") %>\n      </div>\n\n      <%- include(\"includes/footer\") %>\n\n      <script src=\"/socket.io/socket.io.js\"></script>\n      <script src = \"/client_scripts/api-client.js\"></script>\n      <script class=\"std\" src=\"./js/ejs.min.js\"></script>\n      <script class=\"std\" src=\"./js/views.js\"></script>\n\n      <script src=\"/client_scripts/client_socket.js\"></script>\n\n      <input type=\"hidden\" id=\"username-holder\" value=\"<%- userdata.username %>\">\n    </body>\n</html>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<html>\n    ")
    ; __line = 2
    ; __append( include("includes/head") )
    ; __append("\n    <head>\n        <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins\">\n        <link rel=\"icon\" href=\"icons/joystick.png\" type=\"image/icon type\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    </head>\n\n    <body>\n      ")
    ; __line = 10
    ; __append( include("includes/header") )
    ; __append("\n      ")
    ; __line = 11
    ; __append( message )
    ; __append("\n      <form action=\"/sudoku/log_out\" method=\"get\">\n      <button class=\"logout\" type=\"submit\"><img src=\"/styles/img/exit.png\" >Log-out</button>\n      </form>\n      <div class=\"lobcont\" style=\"\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\">\n      ")
    ; __line = 21
    ; __append( include("includes/mainsection") )
    ; __append("\n      </div>\n\n      ")
    ; __line = 24
    ; __append( include("includes/footer") )
    ; __append("\n\n      <script src=\"/socket.io/socket.io.js\"></script>\n      <script src = \"/client_scripts/api-client.js\"></script>\n      <script class=\"std\" src=\"./js/ejs.min.js\"></script>\n      <script class=\"std\" src=\"./js/views.js\"></script>\n\n      <script src=\"/client_scripts/client_socket.js\"></script>\n\n      <input type=\"hidden\" id=\"username-holder\" value=\"")
    ; __line = 33
    ; __append( userdata.username )
    ; __append("\">\n    </body>\n</html>\n")
    ; __line = 36
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
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n    </head>\n    <body>\n      <%- include(\"includes/header\") %>\n      \n\n      <section class=\"main-section\">\n\n       \n        <main>\n          <h1>Sudoku</h1>\n          <hr>\n          <h3><span id=\"msg\"><%- locals.message %></span> <%- locals.username %>!</h3>\n          <p>Currently playing a game of difficulty: <span id=\"level\"><%- locals.diff %></span></p>\n          <h2 id = \"errors\">Score: <span id=\"score\"><%- locals.score %></span>\n          <span id=\"minutes\"> 00 </span>\n          <span id=\"seconds\"> 00 </span>\n          <span id=\"miliseconds\"> 000 </span>\n          </h2>\n\n          <div id=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-2\"></div>\n          </div>\n          <form class=\"form\" method=\"POST\">\n              <input type=\"hidden\" value=\"<%- locals.username %>\" id=\"username\" name=\"username\">\n              <input type=\"hidden\" value=\"<%- locals.password %>\" id=\"password\" name=\"password\">\n              <button class=\"logout\" type=\"submit\" formaction=\"/sudoku/solo_game\"><img src=\"/styles/img/exit.png\" >Back to menu</button>\n              <label>Difficulty</label>\n              <input type=\"range\" min=\"1\" max=\"3\" value=\"<%- locals.diff %>\" id=\"diff\" name=\"diff\">\n              <button type=\"submit\" id=\"startTimer\" ><img src=\"/styles/img/refresh.png\">New Game</button>\n            <!-- onclick=\"startTimer()\" -->\n            </div>\n          </form>\n        </main>\n\n       \n      </section>\n      <%- include(\"includes/footer\") %>\n      <script src = \"/client_scripts/multiplayer.js\"></script>\n\n    </body>\n\n   \n</html>"
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
    ; __append("\n      \n\n      <section class=\"main-section\">\n\n       \n        <main>\n          <h1>Sudoku</h1>\n          <hr>\n          <h3><span id=\"msg\">")
    ; __line = 16
    ; __append( locals.message )
    ; __append("</span> ")
    ; __append( locals.username )
    ; __append("!</h3>\n          <p>Currently playing a game of difficulty: <span id=\"level\">")
    ; __line = 17
    ; __append( locals.diff )
    ; __append("</span></p>\n          <h2 id = \"errors\">Score: <span id=\"score\">")
    ; __line = 18
    ; __append( locals.score )
    ; __append("</span>\n          <span id=\"minutes\"> 00 </span>\n          <span id=\"seconds\"> 00 </span>\n          <span id=\"miliseconds\"> 000 </span>\n          </h2>\n\n          <div id=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-2\"></div>\n          </div>\n          <form class=\"form\" method=\"POST\">\n              <input type=\"hidden\" value=\"")
    ; __line = 36
    ; __append( locals.username )
    ; __append("\" id=\"username\" name=\"username\">\n              <input type=\"hidden\" value=\"")
    ; __line = 37
    ; __append( locals.password )
    ; __append("\" id=\"password\" name=\"password\">\n              <button class=\"logout\" type=\"submit\" formaction=\"/sudoku/solo_game\"><img src=\"/styles/img/exit.png\" >Back to menu</button>\n              <label>Difficulty</label>\n              <input type=\"range\" min=\"1\" max=\"3\" value=\"")
    ; __line = 40
    ; __append( locals.diff )
    ; __append("\" id=\"diff\" name=\"diff\">\n              <button type=\"submit\" id=\"startTimer\" ><img src=\"/styles/img/refresh.png\">New Game</button>\n            <!-- onclick=\"startTimer()\" -->\n            </div>\n          </form>\n        </main>\n\n       \n      </section>\n      ")
    ; __line = 49
    ; __append( include("includes/footer") )
    ; __append("\n      <script src = \"/client_scripts/multiplayer.js\"></script>\n\n    </body>\n\n   \n</html>")
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
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n    </head>\n    <body onload=\"startTimer()\">\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n\n       \n        <main>\n          <h1>Sudoku</h1>\n          <hr>\n          <h3><span id=\"msg\"><%- message %></span> <span id=\"username\"><%- pagedata.username %></span>!</h3>\n          <p>Currently playing a game of difficulty: <span id=\"level\"><%- pagedata.diff %></span></p>\n          <div class=\"container\">\n            <div class=\"time\">\n              <span>Time: </span>\n              <span id=\"seconds\"> 00 </span>s\n          </div>\n            <div class=\"scores\">\n              <h2 id = \"errors\"><span>Score:</span> <span id=\"score\">0</span></h2>\n            </div>\n        </div>\n\n          <div id=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-2\"></div>\n          </div>\n          <form class=\"form\" method=\"POST\">\n          <div class=\"info\">\n              <button type=\"button\" onclick=\"showHint();\"><img src=\"/styles/img/lamp.png\">Show Hint!</button>\n              <br>\n              \n              <label>Difficulty</label>\n              <br>\n              <input type=\"range\" min=\"1\" max=\"3\" value=\"<%- pagedata.diff %>\" id=\"diff\" name=\"diff\">\n              <button type=\"submit\" id=\"startTimer\" formaction=\"/sudoku/solo_game\"><img src=\"/styles/img/refresh.png\">New Game</button>\n            \n          </form>\n          <form class=\"form-out\" method=\"GET\">\n              <button type=\"submit\" formaction=\"/sudoku/high_scores/<%-pagedata.username%>\"><img src=\"/styles/img/list.png\" >Your games</button>\n              <button class=\"logout\" type=\"submit\" formaction=\"/sudoku\"><img src=\"/styles/img/exit.png\">Back to menu</button>\n          </form>\n            \n        </main>\n       \n      </section>\n      <%- include(\"includes/footer\") %>\n    </body> \n\n    <script src = \"/client_scripts/api-client.js\"></script>\n    <script src = \"/game/sudoku-solver.js\"></script>\n</html>"
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
    ; __append("</span> <span id=\"username\">")
    ; __append( pagedata.username )
    ; __append("</span>!</h3>\n          <p>Currently playing a game of difficulty: <span id=\"level\">")
    ; __line = 16
    ; __append( pagedata.diff )
    ; __append("</span></p>\n          <div class=\"container\">\n            <div class=\"time\">\n              <span>Time: </span>\n              <span id=\"seconds\"> 00 </span>s\n          </div>\n            <div class=\"scores\">\n              <h2 id = \"errors\"><span>Score:</span> <span id=\"score\">0</span></h2>\n            </div>\n        </div>\n\n          <div id=\"grid\">\n            <div class=\"smallgrid\" id=\"grid-0-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-0\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-1\"></div>\n            <div class=\"smallgrid\" id=\"grid-0-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-1-2\"></div>\n            <div class=\"smallgrid\" id=\"grid-2-2\"></div>\n          </div>\n          <form class=\"form\" method=\"POST\">\n          <div class=\"info\">\n              <button type=\"button\" onclick=\"showHint();\"><img src=\"/styles/img/lamp.png\">Show Hint!</button>\n              <br>\n              \n              <label>Difficulty</label>\n              <br>\n              <input type=\"range\" min=\"1\" max=\"3\" value=\"")
    ; __line = 45
    ; __append( pagedata.diff )
    ; __append("\" id=\"diff\" name=\"diff\">\n              <button type=\"submit\" id=\"startTimer\" formaction=\"/sudoku/solo_game\"><img src=\"/styles/img/refresh.png\">New Game</button>\n            \n          </form>\n          <form class=\"form-out\" method=\"GET\">\n              <button type=\"submit\" formaction=\"/sudoku/high_scores/")
    ; __line = 50
    ; __append(pagedata.username)
    ; __append("\"><img src=\"/styles/img/list.png\" >Your games</button>\n              <button class=\"logout\" type=\"submit\" formaction=\"/sudoku\"><img src=\"/styles/img/exit.png\">Back to menu</button>\n          </form>\n            \n        </main>\n       \n      </section>\n      ")
    ; __line = 57
    ; __append( include("includes/footer") )
    ; __append("\n    </body> \n\n    <script src = \"/client_scripts/api-client.js\"></script>\n    <script src = \"/game/sudoku-solver.js\"></script>\n</html>")
    ; __line = 62
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
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n        <script src = \"/sudoku.js\"></script>\n    </head>\n    <body>\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n        <main>\n            <h1>Sudoku</h1>\n            <hr>\n            <h3><%#- message %> <%#- pagedata.username %></h3>\n            <p>Currently playing a game of <%#- pagedata.diff %> difficulty</p>\n            <h2 id = \"errors\">Score: <%#- pagedata.score %></h2>\n\n            <!-- 9X9 board -->\n            <div id=\"grid\">\n            </div>\n            \n            <!-- \n            <div id = \"board\"></div>\n            \n            <div id=\"digits\"></div>\n            <br> -->\n        </main>\n      </section>\n      <%- include(\"includes/footer\") %>\n    </body>\n    <script src=\"/socket.io/socket.io.js\"></script>\n    <script src=\"/client_scripts/client_socket.js\"></script>\n</html>"
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
    ; __append(" ")
    ; __append("</h3>\n            <p>Currently playing a game of ")
    ; __line = 15
    ; __append(" difficulty</p>\n            <h2 id = \"errors\">Score: ")
    ; __line = 16
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
  , __lines = "<html>\n    <%- include(\"includes/head\") %>\n    <head>\n        <link rel = \"stylesheet\" href = \"/styles/css/sudoku.css\">\n        <script src=\"/js/ejs.min.js\"></script>\n        <script src=\"/js/views.js\"></script>\n        <script src=\"/socket.io/socket.io.js\"></script>\n        <script src=\"/client_scripts/client_socket.js\"></script>\n    </head>\n    <body onload=\"socket_init()\">\n      <%- include(\"includes/header\") %>\n\n      <section class=\"main-section\">\n        \n        <main>\n            <h1>Sudoku</h1>\n            <hr>\n            \n                    <h4>Connection Successful</h4></li>\n                        <br>\n                        <h2>Lobby ID: <%= lobby.id %></h2>\n                        <h4>Difficulty: <%= lobby.lobbyDiff %></h4>\n                        <h4>Room Size: <%= lobby.lobbySize %></h4>\n                        <br>\n                        <h4 id=\"players_ready\"></h4>\n                        <h2> Players: </h2>\n                        <% lobby.connected_players.forEach(p => {\n                            %>\n                            <li><%-p.player%></li>\n                            <%\n                        });%>\n                        <h4 id=\"players_ready\"></h4>\n\n            </main>\n        </section>\n      <%- include(\"includes/footer\") %>\n    </body>\n\n</html>"
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
    ; __append("\n\n      <section class=\"main-section\">\n        \n        <main>\n            <h1>Sudoku</h1>\n            <hr>\n            \n                    <h4>Connection Successful</h4></li>\n                        <br>\n                        <h2>Lobby ID: ")
    ; __line = 21
    ; __append(escapeFn( lobby.id ))
    ; __append("</h2>\n                        <h4>Difficulty: ")
    ; __line = 22
    ; __append(escapeFn( lobby.lobbyDiff ))
    ; __append("</h4>\n                        <h4>Room Size: ")
    ; __line = 23
    ; __append(escapeFn( lobby.lobbySize ))
    ; __append("</h4>\n                        <br>\n                        <h4 id=\"players_ready\"></h4>\n                        <h2> Players: </h2>\n                        ")
    ; __line = 27
    ;  lobby.connected_players.forEach(p => {
                            
    ; __line = 28
    ; __append("\n                            <li>")
    ; __line = 29
    ; __append(p.player)
    ; __append("</li>\n                            ")
    ; __line = 30
    ; 
                        });
    ; __line = 31
    ; __append("\n                        <h4 id=\"players_ready\"></h4>\n\n            </main>\n        </section>\n      ")
    ; __line = 36
    ; __append( include("includes/footer") )
    ; __append("\n    </body>\n\n</html>")
    ; __line = 39
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}